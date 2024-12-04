import {
  SpeakingWhileMutedNotification,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
  ScreenShareButton,
  useCall,
} from '@stream-io/video-react-sdk';
import React from 'react';
import { Phone } from 'lucide-react';

const CustomEndCallButton = ({ roomId, removeParticipant }: { roomId: string; removeParticipant: (roomId: string) => void }) => {
  const call = useCall();

  const handleEndCall = async () => {
    if (call) {
      try {
        // Remove participant from room
        await removeParticipant(roomId);

        // Leave the call
        await call.leave();
        console.log("Call ended successfully");
      } catch (error) {
        console.error("Failed to end the call:", error);
      }
    }
  };

  return (
    <button onClick={handleEndCall} className="bg-red-500 text-white p-2 rounded-full">
      <Phone size={24} />
    </button>
  );
};

const CustomCallControls = ({ roomId, removeParticipant }: { roomId: string; removeParticipant: (roomId: string) => void }) => {
  return (
    <div className="str-video__call-controls items-center justify-center flex space-x-2">
      <SpeakingWhileMutedNotification>
        <ToggleAudioPublishingButton />
      </SpeakingWhileMutedNotification>
      <ToggleVideoPublishingButton />
      <ScreenShareButton />
      <CustomEndCallButton roomId={roomId} removeParticipant={removeParticipant} />
    </div>
  );
};

export default CustomCallControls;
