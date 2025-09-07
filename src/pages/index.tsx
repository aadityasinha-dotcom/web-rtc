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
    <div className="bg-gray-900 min-h-screen">
      <div className="pt-20 space-y-8">
        <MeetingRoom />
        
        {/* Pass the dummy data directly to the ParticipantGrid */}
        <ParticipantGrid participants={dummyParticipants} />

        {/* Wire up the ControlPanel with local state */}
        <div className="flex justify-center">
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
        
        <TranscriptionPanel />
      </div>
    </div>
  );
};

export default Home;

