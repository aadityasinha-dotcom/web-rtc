import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store'; // Adjust path if needed
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Video, VideoOff } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Participant {
  id: string;
  name: string;
  avatar?: string;
  isHost: boolean;
  audioEnabled: boolean;
  videoEnabled: boolean;
}

// Add a new prop 'participants' to the component props
interface ParticipantGridProps {
  participants?: Participant[];
}

const ParticipantCard = ({ participant }: { participant: Participant }) => {
  const initials = participant.name.split(' ').map(n => n[0]).join('').toUpperCase();
  return (
    <Card className={cn("bg-gray-800 border-gray-700 text-white flex flex-col items-center justify-center relative aspect-video transition-all duration-300", participant.isHost && "border-blue-500 border-2")}>
      <CardContent className="p-4 flex flex-col items-center justify-center gap-3">
        <Avatar className="w-16 h-16 text-xl">
          <AvatarImage src={participant.avatar} alt={participant.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm">{participant.name}</p>
          {participant.isHost && <Badge variant="secondary">Host</Badge>}
        </div>
      </CardContent>
      <div className="absolute bottom-2 right-2 flex gap-2">
        <div className={cn("p-1.5 rounded-full", participant.audioEnabled ? "bg-green-500/20" : "bg-red-500/80")}>
          {participant.audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
        </div>
        <div className={cn("p-1.5 rounded-full", participant.videoEnabled ? "bg-green-500/20" : "bg-red-500/80")}>
          {participant.videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
        </div>
      </div>
    </Card>
  );
};

const EmptySlotCard = () => (
  <Card className="bg-gray-800/50 border-gray-700 border-dashed flex items-center justify-center aspect-video">
    <CardContent className="p-4"><p className="text-gray-500 text-sm">Empty slot</p></CardContent>
  </Card>
);

const ParticipantGrid = ({ participants: participantsProp }: ParticipantGridProps) => {
  // Use Redux state as a fallback if no props are passed
  const { currentMeeting } = useSelector((state: RootState) => state.meeting);
  const participantsFromStore = currentMeeting?.participants || [];
  
  // Prioritize the prop over the Redux store for easier testing
  const participants = participantsProp || participantsFromStore;

  const minSlots = 4;
  const gridItems = [...participants];
  while (gridItems.length < minSlots) {
    gridItems.push(null);
  }

  return (
    <div className="p-4 md:p-6 bg-gray-900 text-white">
      <h3 className="text-xl font-bold mb-4">Participants ({participants.length})</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {gridItems.map((participant, index) =>
          participant ? (
            <ParticipantCard key={participant.id} participant={participant} />
          ) : (
            <EmptySlotCard key={`empty-${index}`} />
          )
        )}
      </div>
    </div>
  );
};

export default ParticipantGrid;

