import React from 'react';

const ControlPanel = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#2c2c2c', 
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      gap: '15px'
    }}>
      <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        🎤 Mute
      </button>
      <button style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px' }}>
        📹 Video
      </button>
      <button style={{ padding: '10px 20px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '5px' }}>
        🖥️ Share Screen
      </button>
      <button style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }}>
        📞 End Call
      </button>
      <button style={{ padding: '10px 20px', backgroundColor: '#9C27B0', color: 'white', border: 'none', borderRadius: '5px' }}>
        🎥 Record
      </button>
    </div>
  );
};

export default ControlPanel;

