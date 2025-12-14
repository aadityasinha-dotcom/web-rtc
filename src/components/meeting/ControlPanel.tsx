import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff, ScreenShare, ScreenShareOff, PhoneOff, Circle, Square } from 'lucide-react';
import { cn } from "@/lib/utils";

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
    <div className="control-panel-wrapper">
      <div className="control-panel-container">
        
        {/* Mute/Unmute Button */}
        <Button
          onClick={onToggleMute}
          variant={isMuted ? "destructive" : "secondary"}
          size="lg"
          className={cn(
            "control-button",
            isMuted && "control-button-active-red"
          )}
        >
          <div className="control-button-icon">
            {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </div>
          <span className="control-button-label">{isMuted ? 'Unmute' : 'Mute'}</span>
        </Button>

        {/* Video On/Off Button */}
        <Button
          onClick={onToggleVideo}
          variant={isVideoOff ? "destructive" : "secondary"}
          size="lg"
          className={cn(
            "control-button",
            isVideoOff && "control-button-active-red"
          )}
        >
          <div className="control-button-icon">
            {isVideoOff ? <VideoOff className="h-6 w-6" /> : <Video className="h-6 w-6" />}
          </div>
          <span className="control-button-label">{isVideoOff ? 'Start Video' : 'Stop Video'}</span>
        </Button>
        
        {/* Share Screen Button */}
        <Button
          onClick={onToggleScreenShare}
          variant="secondary"
          size="lg"
          className={cn(
            "control-button hidden md:flex",
            isScreenSharing && "control-button-active-blue"
          )}
        >
          <div className="control-button-icon">
            {isScreenSharing ? <ScreenShareOff className="h-6 w-6" /> : <ScreenShare className="h-6 w-6" />}
          </div>
          <span className="control-button-label">{isScreenSharing ? 'Stop Sharing' : 'Share Screen'}</span>
        </Button>
        
        {/* Record Button */}
        <Button
          onClick={onToggleRecording}
          variant="secondary"
          size="lg"
          className={cn(
            "control-button hidden md:flex",
            isRecording && "control-button-active-red animate-pulse"
          )}
        >
          <div className="control-button-icon">
            {isRecording ? <Square className="h-6 w-6 fill-current" /> : <Circle className="h-6 w-6" />}
          </div>
          <span className="control-button-label">{isRecording ? 'Stop' : 'Record'}</span>
        </Button>
        
        {/* End Call Button */}
        <Button
          onClick={onEndCall}
          variant="destructive"
          size="lg"
          className="control-button control-button-end-call"
        >
          <div className="control-button-icon rotate-135">
            <PhoneOff className="h-6 w-6" />
          </div>
          <span className="control-button-label">End Call</span>
        </Button>

      </div>
    </div>
  );
};

export default ControlPanel;

