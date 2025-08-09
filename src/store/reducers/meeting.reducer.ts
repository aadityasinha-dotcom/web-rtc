import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Participant {
  id: string;
  userId: string;
  name: string;
  avatar?: string;
  isHost: boolean;
  audioEnabled: boolean;
  videoEnabled: boolean;
  isScreenSharing: boolean;
  joinedAt: Date;
}

export interface Meeting {
  id: string;
  title: string;
  hostId: string;
  participants: Participant[];
  isActive: boolean;
  startTime: Date;
  endTime?: Date;
}

export interface MeetingState {
  currentMeeting: Meeting | null;
  meetings: Meeting[];
  isInMeeting: boolean;
  isRecording: boolean;
  audioEnabled: boolean;
  videoEnabled: boolean;
  screenSharing: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: MeetingState = {
  currentMeeting: null,
  meetings: [],
  isInMeeting: false,
  isRecording: false,
  audioEnabled: true,
  videoEnabled: true,
  screenSharing: false,
  loading: false,
  error: null,
};

const meetingSlice = createSlice({
  name: 'meeting',
  initialState,
  reducers: {
    joinMeeting: (state, action: PayloadAction<Meeting>) => {
      state.currentMeeting = action.payload;
      state.isInMeeting = true;
    },
    leaveMeeting: (state) => {
      state.currentMeeting = null;
      state.isInMeeting = false;
      state.isRecording = false;
      state.screenSharing = false;
    },
    // ... other reducers
  },
});

export const { joinMeeting, leaveMeeting } = meetingSlice.actions;
export const meetingReducer = meetingSlice.reducer; // Make sure this export exists

