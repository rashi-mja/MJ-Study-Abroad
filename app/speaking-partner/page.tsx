"use client";

import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    updateDoc,
    doc,
    getDocs,
    setDoc
} from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import SimplePeer from "simple-peer";

type UserDocument = {
    id: string;
    userId: string;
    isMatched: boolean;
    joinedAt: number;
    roomId: string | null;
};

export default function SpeakingPartner() {
    const { user } = useUser();
    const userId = user?.id;
    const [roomId, setRoomId] = useState<string | null>(null);
    const [peer, setPeer] = useState<SimplePeer.Instance | null>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const processedSignals = new Set<string>();

    useEffect(() => {
        if (!userId) return;

        const joinQueue = async () => {
            // Add user to the queue
            const docRef = await addDoc(collection(db, "speaking-partners"), {
                userId,
                roomId: null,
                isMatched: false,
                joinedAt: Date.now(),
            });

            // Listen for room assignment
            const q = query(
                collection(db, "speaking-partners"),
                where("userId", "==", userId)
            );
            const unsubscribe = onSnapshot(q, (snapshot) => {
                snapshot.forEach((doc) => {
                    const data = doc.data() as UserDocument;
                    if (data.roomId) {
                        setRoomId(data.roomId);
                    }
                });
            });

            // Get the total number of users in the room
            const roomSnapshot = await getDocs(query(collection(db, "speaking-partners"), where("roomId", "==", null)));
            const userCount = roomSnapshot.docs.length;

            // Assign role based on the order
            const isInitiator = userCount === 1; // First user is the initiator
            localStorage.setItem("isInitiator", JSON.stringify(isInitiator)); // Store the role locally for reference
            console.log("Role:", isInitiator ? "Initiator" : "Responder");

            return () => {
                unsubscribe();
            };
        };

        joinQueue();
    }, [userId]);

    useEffect(() => {
        if (!roomId || !userId) return;

        const initWebRTC = async () => {
            // Capture user media
            const localStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            setStream(localStream);


            // Attach local stream to video element
            const localVideo = document.getElementById("localVideo") as HTMLVideoElement;
            if (localVideo) {
                localVideo.srcObject = localStream;
            }

            const isInitiator = JSON.parse(localStorage.getItem("isInitiator") || "false");

            const newPeer = new SimplePeer({
                initiator: isInitiator,
                trickle: true,
                stream: localStream,
            });

            setPeer(newPeer);

            // Listen for signaling data via Firestore
            const roomRef = doc(db, "rooms", roomId);

            const unsubscribe = onSnapshot(roomRef, (snapshot) => {
                const data = snapshot.data();
                if (!data) return;

                console.log("Signaling Data Received:", data);

                try {
                    // Process SDP offer
                    if (data.offer && !isInitiator && !processedSignals.has("offer")) {
                        processedSignals.add("offer");
                        newPeer.signal(JSON.parse(data.offer));
                    }

                    // Process SDP answer
                    if (data.answer && isInitiator && !processedSignals.has("answer")) {
                        processedSignals.add("answer");
                        newPeer.signal(JSON.parse(data.answer));
                    }

                    // Process ICE candidates
                    Object.keys(data).forEach((key) => {
                        if (key.startsWith("candidate-") && !processedSignals.has(key)) {
                            processedSignals.add(key);
                            newPeer.signal(JSON.parse(data[key]));
                        }
                    });
                } catch (error) {
                    console.error("Error processing remote signaling data:", error);
                }
            });

            // Send signaling data
            newPeer.on("signal", (data) => {
                console.log("Signaling Data Sent:", data);

                // Send all signaling data to Firestore (offer, answer, or ICE candidates)
                updateDoc(roomRef, {
                    [isInitiator ? "offer" : "answer"]: JSON.stringify(data),
                }).catch((err) => console.error("Error updating signaling data:", err));
            });

            // Listen for the remote stream
            newPeer.on("stream", (remoteStream: MediaStream) => {
                console.log("Remote Stream Tracks:", remoteStream.getTracks());

                const remoteVideo = document.getElementById("remoteVideo") as HTMLVideoElement;
                if (remoteVideo) {
                    remoteVideo.srcObject = remoteStream;
                }
            });
            newPeer.on("connect", () => {
                console.log("Peer connected successfully!");
            });

            newPeer.on("close", () => {
                console.log("Peer connection closed.");
                if (!newPeer.destroyed) {
                    newPeer.destroy();
                }
            });

            newPeer.on("error", (err) => {
                console.error("Peer connection error:", err);
            });

            return () => {
                unsubscribe();
                if (peer) {
                    peer.destroy();
                }
            };
        };

        initWebRTC();
    }, [roomId, userId]);

    return (
        <main className="h-[100vh] flex flex-col items-center justify-center bg-slate-400">
            {roomId ? (
                <div className="flex flex-col items-center space-y-4">
                    <video
                        id="localVideo"
                        autoPlay
                        muted
                        playsInline
                        className="w-1/3 bg-black"
                    ></video>
                    <video
                        id="remoteVideo"
                        autoPlay
                        playsInline
                        className="w-1/3 bg-black"
                    ></video>
                    <p>Connected to Room: {roomId}</p>
                </div>
            ) : (
                <p>Waiting for a partner...</p>
            )}
        </main>
    );
}
