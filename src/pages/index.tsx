import React from 'react';
import type { NextPage } from 'next';

import MeetingRoom from '../components/meeting/MeetingRoom';
import ParticipantGrid from '../components/meeting/ParticipantGrid';
import ControlPanel from '../components/meeting/ControlPanel';
import TranscriptionPanel from '../components/meeting/TranscriptionPanel';

// import { Amplify } from 'aws-amplify';
// import awsExports from 'aws-exports';

// Amplify.configure({ ...awsExports, ssr: true });
const Home: NextPage = () => {
  return (
    <>
      <div style={{ marginTop: '60px' }}>
        <MeetingRoom />
        <ParticipantGrid />
        <ControlPanel />
        <TranscriptionPanel />
      </div>
    </>
  );
};

export default Home;

