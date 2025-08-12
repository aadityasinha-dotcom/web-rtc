import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
import {
  toggleAudio,
  toggleVideo,
  toggleScreenShare,
  startRecording,
  stopRecording,
  leaveMeeting,
} from '../../store/reducers/meeting.reducer';
import { useRouter } from 'next/router';

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Get the meeting state from the Redux store
  const { audioEnabled, videoEnabled, screenSharing, isRecording, isInMeeting } = useAppSelector(
    (state) => state.meeting
  );

  // Handler functions to dispatch actions
  const handleToggleAudio = () => {
    dispatch(toggleAudio(!audioEnabled));
  };

  const handleToggleVideo = () => {
    dispatch(toggleVideo(!videoEnabled));
  };

  const handleToggleScreenShare = () => {
    dispatch(toggleScreenShare(!screenSharing));
  };

  const handleToggleRecording = () => {
    if (isRecording) {
      dispatch(stopRecording());
    } else {
      dispatch(startRecording());
    }
  };

  const handleEndCall = () => {
    dispatch(leaveMeeting());
    // Optionally, redirect the user after ending the call
    router.push('/');
  };

  // If not in a meeting, you can choose to show nothing or a disabled state
  if (!isInMeeting) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#2c2c2c', color: '#666', textAlign: 'center' }}>
        No active meeting.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#2c2c2c',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
      }}
    >
      {/* Mute/Unmute Button */}
      <button
        onClick={handleToggleAudio}
        style={{
          padding: '10px 20px',
          backgroundColor: audioEnabled ? '#4CAF50' : '#f44336', // Green for on, red for off
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {audioEnabled ? '🎤 Mute' : '🎤 Unmute'}
      </button>

      {/* Video On/Off Button */}
      <button
        onClick={handleToggleVideo}
        style={{
          padding: '10px 20px',
          backgroundColor: videoEnabled ? '#4CAF50' : '#f44336', // Green for on, red for off
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {videoEnabled ? '📹 Video Off' : '📹 Video On'}
      </button>

      {/* Share Screen Button */}
      <button
        onClick={handleToggleScreenShare}
        style={{
          padding: '10px 20px',
          backgroundColor: screenSharing ? '#f44336' : '#FF9800', // Red to stop, orange to start
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {screenSharing ? '🖥️ Stop Sharing' : '🖥️ Share Screen'}
      </button>
      
      {/* Record Button */}
      <button
        onClick={handleToggleRecording}
        style={{
          padding: '10px 20px',
          backgroundColor: isRecording ? '#f44336' : '#9C27B0', // Red to stop, purple to start
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isRecording ? '⏹️ Stop Recording' : '🎥 Record'}
      </button>

      {/* End Call Button */}
      <button
        onClick={handleEndCall}
        style={{
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        📞 End Call
      </button>
    </div>
  );
};

export default ControlPanel;

