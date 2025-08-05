import React from 'react';

const ParticipantGrid = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '400px' }}>
      <h3>Participant Grid</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '20px' }}>
        <div style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center', height: '150px' }}>
          Participant 1
        </div>
        <div style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center', height: '150px' }}>
          Participant 2
        </div>
        <div style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center', height: '150px' }}>
          Participant 3
        </div>
        <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center', height: '150px' }}>
          Empty Slot
        </div>
      </div>
    </div>
  );
};

export default ParticipantGrid;

