import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff, ScreenShare, ScreenShareOff, PhoneOff, Circle, Square } from 'lucide-react';
import { cn } from "@/lib/utils"; // Import the 'cn' utility

// Define props to make the component dynamic
interface ControlPanelProps {
  isMuted: boolean;
  isVideoOff: boolean;
  isScreenSharing: boolean;
  isRecording: boolean;
  onToggleMute: () => void;
  onToggleVideo: () => void;
  onToggleScreenShare: () => void;
  onToggleRecording: () => void;
  onEndCall: () => void;
}

const ControlPanel = ({
  isMuted,
  isVideoOff,
  isScreenSharing,
  isRecording,
  onToggleMute,
  onToggleVideo,
  onToggleScreenShare,
  onToggleRecording,
  onEndCall
}: ControlPanelProps) => {
  return (
    // Replaced inline styles with Tailwind CSS classes
    <div className="p-4 bg-gray-900 flex justify-center items-center gap-3 md:gap-4 rounded-lg">
      
      {/* Mute/Unmute Button */}
      <Button
        onClick={onToggleMute}
        variant={isMuted ? "destructive" : "secondary"}
        size="lg"
        className="flex flex-col h-auto p-3 gap-1"
      >
        {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
        <span className="text-xs">{isMuted ? 'Unmute' : 'Mute'}</span>
      </Button>

      {/* Video On/Off Button */}
      <Button
        onClick={onToggleVideo}
        variant={isVideoOff ? "destructive" : "secondary"}
        size="lg"
        className="flex flex-col h-auto p-3 gap-1"
      >
        {isVideoOff ? <VideoOff className="h-6 w-6" /> : <Video className="h-6 w-6" />}
        <span className="text-xs">{isVideoOff ? 'Start Video' : 'Stop Video'}</span>
      </Button>
      
      {/* Share Screen Button */}
      <Button
        onClick={onToggleScreenShare}
        variant="secondary"
        size="lg"
        className={cn("flex-col h-auto p-3 gap-1 hidden md:flex", { // Hides on small screens
          "bg-blue-500 hover:bg-blue-600 text-white": isScreenSharing,
        })}
      >
        {isScreenSharing ? <ScreenShareOff className="h-6 w-6" /> : <ScreenShare className="h-6 w-6" />}
        <span className="text-xs">{isScreenSharing ? 'Stop Sharing' : 'Share Screen'}</span>
      </Button>
      
      {/* Record Button */}
      <Button
        onClick={onToggleRecording}
        variant="secondary"
        size="lg"
        className={cn("flex-col h-auto p-3 gap-1 hidden md:flex", { // Hides on small screens
            "bg-red-500 hover:bg-red-600 text-white": isRecording,
        })}
      >
        {isRecording ? <Square className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
        <span className="text-xs">{isRecording ? 'Stop' : 'Record'}</span>
      </Button>
      
      {/* End Call Button */}
      <Button
        onClick={onEndCall}
        variant="destructive"
        size="lg"
        className="flex flex-col h-auto p-3 gap-1"
      >
        <PhoneOff className="h-6 w-6" />
        <span className="text-xs">End Call</span>
      </Button>

    </div>
  );
};

export default ControlPanel;

