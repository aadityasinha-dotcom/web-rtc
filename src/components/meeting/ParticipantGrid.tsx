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
    <Card className={cn(
      "group relative aspect-video overflow-hidden border-slate-200 bg-slate-50 text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]",
      participant.isHost && "ring-2 ring-blue-500/70"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <CardContent className="relative flex h-full flex-col items-center justify-center gap-3 p-4">
        <Avatar className="h-16 w-16 text-xl ring-4 ring-white">
          <AvatarImage src={participant.avatar} alt={participant.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-sm">
          <p className="text-sm font-semibold">{participant.name}</p>
          {participant.isHost && <Badge className="rounded-full bg-blue-100 text-blue-700 hover:bg-blue-100">Host</Badge>}
        </div>
      </CardContent>
      <div className="absolute bottom-3 right-3 flex gap-2">
        <div className={cn("rounded-full p-1.5 shadow-sm", participant.audioEnabled ? "bg-emerald-500/15 text-emerald-600" : "bg-rose-500 text-white")}>
          {participant.audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
        </div>
        <div className={cn("rounded-full p-1.5 shadow-sm", participant.videoEnabled ? "bg-emerald-500/15 text-emerald-600" : "bg-rose-500 text-white")}>
          {participant.videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
        </div>
      </div>
    </Card>
  );
};

const EmptySlotCard = () => (
  <Card className="flex aspect-video items-center justify-center border-dashed border-slate-200 bg-white/70">
    <CardContent className="p-4"><p className="text-sm text-slate-400">Empty slot</p></CardContent>
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
    <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-4 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">People in the call</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {participants.length} connected
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
