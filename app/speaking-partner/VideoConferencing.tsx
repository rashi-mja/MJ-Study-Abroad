"use client";

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Users, LogIn, LogOut } from 'lucide-react'
import { useEffect, useState } from "react";
import { Call, StreamCall, StreamTheme, StreamVideo, SpeakerLayout, StreamVideoClient } from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useUser } from "@clerk/clerk-react";
import { collection, getDocs, query, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomCallControls from "./CallControls";
import { Baloo_Bhai_2 } from 'next/font/google';

const Baloo = Baloo_Bhai_2({ subsets: ['latin'], weight: ['400', '500', '700'] });

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
                <div className="min-h-screen bg-red-400 rounded-lg p-10">
                    <StreamVideo client={client!}>
                        <StreamTheme className="text-white my-theme-overrides">
                            <StreamCall call={call}>
                                <SpeakerLayout />
                                <CustomCallControls />
                            </StreamCall>
                        </StreamTheme>
                    </StreamVideo>
                </div>
            )}
            {!call && (
                <RoomList setCallId={setSelectedCallId} />
            )}
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
        <div className="container mx-auto px-4 py-8">
            <h1 className={`${Baloo.className} text-3xl font-extrabold text-center mb-8`}>IELTS Speaking Partner</h1>
            <div className="text-center mb-8">
                <Button
                    onClick={createRoom}
                    disabled={loading}
                    size="lg"
                    className={`${Baloo.className} bg-black font-bold`}
                >
                    {loading ? (
                        <>Creating Room...</>
                    ) : (
                        <>
                            <PlusCircle className="mr-2 h-4 w-4" /> Create New Room
                        </>
                    )}
                </Button>
            </div>
            {rooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rooms.map((room) => (
                        <Card key={room.id} className="w-full">
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center">
                                    Room {room.id}
                                    <Badge variant={room.participants.length > 2 ? "destructive" : "secondary"}>
                                        {room.participants.length > 2 ? "Full" : "Available"}
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center mb-2">
                                    <Users className="mr-2 h-4 w-4" />
                                    <span>
                                        {room.participants.length} / 2 Participants
                                    </span>
                                </div>
                                <div>
                                    {room.participants.map((p, index) => (
                                        <Badge key={index} variant="outline" className="mr-2">
                                            {p.name}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    onClick={() => { setCallId(room.id); addParticipantToRoom(room.id) }}
                                    disabled={room.isFull}
                                    variant="outline"
                                >
                                    <LogIn className="mr-2 h-4 w-4" /> Join Room
                                </Button>
                                <Button
                                    onClick={() => { setCallId(''); removeParticipantFromRoom(room.id) }}
                                    // disabled={callId !== room.id}
                                    variant="destructive"
                                >
                                    <LogOut className="mr-2 h-4 w-4" /> Exit Room
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No available rooms found.</p>
            )}
        </div>
    );
}
