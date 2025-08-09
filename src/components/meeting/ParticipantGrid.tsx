import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ParticipantGrid = () => {
  const { currentMeeting } = useSelector((state: RootState) => state.meeting);
  const participants = currentMeeting?.participants || [];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '400px' }}>
      <h3>Participants ({participants.length})</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '20px' }}>
        {participants.map((participant) => (
          <div key={participant.id} style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center', height: '150px' }}>
            {participant.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantGrid;

