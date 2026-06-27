import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff, ScreenShare, ScreenShareOff, PhoneOff, Circle, Square } from 'lucide-react';
import { cn } from "@/lib/utils";
import styles from './ControlPanel.module.css';

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
    <div className={styles.controlPanelWrapper}>
      <div className={styles.controlPanelContainer}>
        
        {/* Mute/Unmute Button */}
        <Button
          onClick={onToggleMute}
          variant={isMuted ? "destructive" : "secondary"}
          size="lg"
          className={cn(styles.controlButton, isMuted && styles.controlButtonActiveRed)}
        >
          <div className={styles.controlButtonIcon}>
            {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </div>
          <span className={styles.controlButtonLabel}>{isMuted ? 'Unmute' : 'Mute'}</span>
        </Button>

        {/* Video On/Off Button */}
        <Button
          onClick={onToggleVideo}
          variant={isVideoOff ? "destructive" : "secondary"}
          size="lg"
          className={cn(styles.controlButton, isVideoOff && styles.controlButtonActiveRed)}
        >
          <div className={styles.controlButtonIcon}>
            {isVideoOff ? <VideoOff className="h-6 w-6" /> : <Video className="h-6 w-6" />}
          </div>
          <span className={styles.controlButtonLabel}>{isVideoOff ? 'Start Video' : 'Stop Video'}</span>
        </Button>
        
        {/* Share Screen Button */}
        <Button
          onClick={onToggleScreenShare}
          variant="secondary"
          size="lg"
          className={cn(styles.controlButton, "hidden md:flex", isScreenSharing && styles.controlButtonActiveBlue)}
        >
          <div className={styles.controlButtonIcon}>
            {isScreenSharing ? <ScreenShareOff className="h-6 w-6" /> : <ScreenShare className="h-6 w-6" />}
          </div>
          <span className={styles.controlButtonLabel}>{isScreenSharing ? 'Stop Sharing' : 'Share Screen'}</span>
        </Button>
        
        {/* Record Button */}
        <Button
          onClick={onToggleRecording}
          variant="secondary"
          size="lg"
          className={cn(styles.controlButton, "hidden md:flex", isRecording && styles.controlButtonActiveRed)}
        >
          <div className={styles.controlButtonIcon}>
            {isRecording ? <Square className="h-6 w-6 fill-current" /> : <Circle className="h-6 w-6" />}
          </div>
          <span className={styles.controlButtonLabel}>{isRecording ? 'Stop' : 'Record'}</span>
        </Button>
        
        {/* End Call Button */}
        <Button
          onClick={onEndCall}
          variant="destructive"
          size="lg"
          className={cn(styles.controlButton, styles.controlButtonEndCall)}
        >
          <div className={cn(styles.controlButtonIcon, styles.rotate135)}>
            <PhoneOff className="h-6 w-6" />
          </div>
          <span className={styles.controlButtonLabel}>End Call</span>
        </Button>

      </div>
    </div>
  );
};

export default ControlPanel;
