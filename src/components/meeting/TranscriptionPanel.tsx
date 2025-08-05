import React from 'react';

const TranscriptionPanel = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '300px' }}>
      <h3>Live Transcription</h3>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        border: '1px solid #ddd', 
        borderRadius: '5px',
        marginTop: '10px',
        maxHeight: '250px',
        overflowY: 'auto'
      }}>
        <div style={{ marginBottom: '10px' }}>
          <strong>John Doe (10:30 AM):</strong>
          <p>Welcome everyone to today's meeting. Let's start with the agenda.</p>
        </div>
        <div style={{ marginBottom: '10px', backgroundColor: '#f0f8ff', padding: '8px', borderRadius: '3px' }}>
          <strong>AI Summary:</strong>
          <p><em>Meeting started with agenda discussion</em></p>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Jane Smith (10:32 AM):</strong>
          <p>Thanks John. I'd like to discuss the quarterly results first.</p>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Mike Johnson (10:33 AM):</strong>
          <p>Sounds good. I have the presentation ready to share.</p>
        </div>
      </div>
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px' }}>
          Export Transcript
        </button>
        <button style={{ padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '3px' }}>
          Generate Summary
        </button>
      </div>
    </div>
  );
};

export default TranscriptionPanel;

