"use client";

import { useEffect, useState } from "react";
import { Call, StreamCall, StreamTheme, StreamVideo, SpeakerLayout, StreamVideoClient } from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useUser } from "@clerk/clerk-react";
import { collection, getDocs, query, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomCallControls from "./CallControls";

const apiKey = "mmhfdzb5evj2";

const tokenProvider = async (userId: string) => {
    const { token } = await fetch(
        "https://pronto.getstream.io/api/auth/create-token?" +
        new URLSearchParams({
            api_key: apiKey,
            user_id: userId,
        })
    ).then((res) => res.json());
    return token as string;
};

type Room = {
    id: string;
    isFull: boolean;
    participants: {
        name: string;
        userId: string;
        lastActive: number;
    }[];
};

export default function VideoConferencingRoom() {
    const { user } = useUser();
    const [client, setClient] = useState<StreamVideoClient>();
    const [call, setCall] = useState<Call>();
    const [selectedCallId, setSelectedCallId] = useState<string | null>(null);

    // Initialize Stream Video Client
    useEffect(() => {
        if (!user) return;

        const myClient = new StreamVideoClient({
            apiKey,
            user: { id: user.id },
            tokenProvider: () => tokenProvider(user.id),
        });

        setClient(myClient);

        return () => {
            myClient.disconnectUser();
            setClient(undefined);
        };
    }, [user]);

    // Join call
    useEffect(() => {
        if (!client || !selectedCallId) return;

        const myCall = client.call("default", selectedCallId);
        myCall
            .join({ create: true })
            .catch((err) => console.error("Failed to join the call:", err));

        setCall(myCall);

        return () => {
            myCall
                .leave()
                .catch((err) => console.error("Failed to leave the call:", err));
            setCall(undefined);
        };
    }, [client, selectedCallId]);

    return (
        <>
            {call && (
                <>
                    <StreamVideo client={client!}>
                        <StreamTheme className="text-white my-theme-overrides">
                            <StreamCall call={call}>
                                <SpeakerLayout />
                                <CustomCallControls />
                            </StreamCall>
                        </StreamTheme>
                    </StreamVideo>
                </>
            )}
            <RoomList setCallId={setSelectedCallId} />
        </>
    );
}

function RoomList({
    setCallId,
}: {
    setCallId: (callId: string) => void;
}) {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState(false);
    const { user } = useUser();

    const fetchRooms = async () => {
        try {
            const roomsQuery = query(collection(db, "rooms"));
            const querySnapshot = await getDocs(roomsQuery);

            // Map Firestore data to the Room type
            const fetchedRooms = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Room[];

            setRooms(fetchedRooms);
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };

    const createRoom = async () => {
        try {
            setLoading(true);

            const newRoom = {
                isFull: false,
                participants: [],
            };

            const docRef = await addDoc(collection(db, "rooms"), newRoom);
            console.log("Room created with ID:", docRef.id);

            // Refresh the room list after creation
            fetchRooms();
        } catch (error) {
            console.error("Error creating room:", error);
        } finally {
            setLoading(false);
        }
    };

    const addParticipantToRoom = async (roomId: string) => {
        try {
            const roomRef = doc(db, "rooms", roomId);
            const roomSnapshot = await getDoc(roomRef);

            if (roomSnapshot.exists()) {
                const roomData = roomSnapshot.data();

                // Add the current user as a participant
                const updatedParticipants = [
                    ...(roomData.participants || []),
                    {
                        name: user?.fullName || "Anonymous",
                        userId: user?.id,
                        lastActive: Date.now(),
                    },
                ];

                await updateDoc(roomRef, {
                    participants: updatedParticipants,
                });

                console.log(`Participant added to room ${roomId} successfully!`);

                // Optionally refresh the room list
                fetchRooms();

                // Set the selected call ID
                setCallId(roomId);
            } else {
                console.error("Room does not exist.");
            }
        } catch (error) {
            console.error("Error adding participant to the room:", error);
        }
    };

    const removeParticipantFromRoom = async (roomId: string) => {
        try {
            const roomRef = doc(db, "rooms", roomId);
            const roomSnapshot = await getDoc(roomRef);

            if (roomSnapshot.exists()) {
                const roomData = roomSnapshot.data();

                // Filter out the current user from the participants array
                const updatedParticipants = (roomData.participants || []).filter(
                    (participant: any) => participant.userId !== user?.id
                );

                await updateDoc(roomRef, {
                    participants: updatedParticipants,
                });

                console.log(`Participant removed from room ${roomId} successfully!`);
                fetchRooms();
            } else {
                console.error("Room does not exist.");
            }
        } catch (error) {
            console.error("Error removing participant from the room:", error);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <h1>Available Rooms</h1>
            <button
                onClick={createRoom}
                disabled={loading}
                style={{
                    padding: "10px 20px",
                    marginBottom: "20px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: loading ? "not-allowed" : "pointer",
                }}
            >
                {loading ? "Creating Room..." : "Create New Room"}
            </button>
            <ul className="gap-4">
                {rooms.length > 0 ? (
                    rooms.map((room) => (
                        <li key={room.id}>
                            <div>
                                <strong>Room ID:</strong> {room.id}
                            </div>
                            <div>
                                <strong>Participants:</strong>{" "}
                                {room.participants.map((p) => p.name).join(", ")}
                            </div>
                            <div>
                                <strong>Is Full:</strong> {room.isFull ? "Yes" : "No"}
                            </div>
                            <button
                                onClick={() => { setCallId(room.id); addParticipantToRoom(room.id) }}
                                style={{
                                    padding: "5px 10px",
                                    marginTop: "10px",
                                    backgroundColor: "#28a745",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Join Room
                            </button>
                            <button
                                onClick={() => { setCallId(''); removeParticipantFromRoom(room.id) }}
                                style={{
                                    padding: "5px 10px",
                                    marginTop: "10px",
                                    backgroundColor: "#dc3545",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Exit Room
                            </button>
                        </li>
                    ))
                ) : (
                    <p>No available rooms found.</p>
                )}
            </ul>
        </div>
    );
}
