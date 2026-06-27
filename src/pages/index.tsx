import React, { useState } from 'react';
import type { NextPage } from 'next';
import MeetingRoom from '../components/meeting/MeetingRoom';
import ParticipantGrid from '../components/meeting/ParticipantGrid';
import ControlPanel from '../components/meeting/ControlPanel';
import TranscriptionPanel from '../components/meeting/TranscriptionPanel';

// Define the dummy participants data
const dummyParticipants = [
  { id: '1', name: 'Aaditya Sinha', avatar: 'https://i.pravatar.cc/150?img=1', isHost: true, audioEnabled: true, videoEnabled: true },
  { id: '2', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2', isHost: false, audioEnabled: false, videoEnabled: true },
  { id: '3', name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=3', isHost: false, audioEnabled: true, videoEnabled: false },
  // You can add more participants here
];

const Home: NextPage = () => {
  // Local state for controlling the UI components
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleEndCall = () => {
    alert("Call Ended!");
    // In a real app, you would dispatch a Redux action here
  };

  return (
    <div className="min-h-screen pb-40">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 lg:py-8">
        <MeetingRoom />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <ParticipantGrid participants={dummyParticipants} />
          <TranscriptionPanel />
        </div>
        <ControlPanel
          isMuted={isMuted}
          isVideoOff={isVideoOff}
          isScreenSharing={isScreenSharing}
          isRecording={isRecording}
          onToggleMute={() => setIsMuted(!isMuted)}
          onToggleVideo={() => setIsVideoOff(!isVideoOff)}
          onToggleScreenShare={() => setIsScreenSharing(!isScreenSharing)}
          onToggleRecording={() => setIsRecording(!isRecording)}
          onEndCall={handleEndCall}
        />
      </div>
    </div>
  );
};

export default Home;
