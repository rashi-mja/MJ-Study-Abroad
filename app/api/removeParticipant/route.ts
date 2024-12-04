import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

console.log("API Route Hit");
export async function POST(request: NextRequest) {

    try {
        // Parse the request body
        const { roomId, userId } = await request.json();
        console.log("Request Body:", { roomId, userId });

        if (!roomId || !userId) {
            return NextResponse.json({ message: "Missing roomId or userId" }, { status: 400 });
        }

        // Firestore logic
        const roomRef = doc(db, "rooms", roomId);
        const roomSnapshot = await getDoc(roomRef);

        if (!roomSnapshot.exists()) {
            return NextResponse.json({ message: "Room not found" }, { status: 404 });
        }

        const roomData = roomSnapshot.data();
        const updatedParticipants = (roomData?.participants || []).filter(
            (participant: any) => participant.userId !== userId
        );

        await updateDoc(roomRef, { participants: updatedParticipants });

        return NextResponse.json({ message: "Participant removed successfully" });
    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
