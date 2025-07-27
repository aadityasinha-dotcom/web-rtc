import { Dispatch } from 'redux';
import { AuthAction, LoginCredentials, RegisterData } from './auth.actions';
import { MeetingAction, CreateMeetingData } from './meeting.actions';
import { TranscriptionAction } from './transcription.actions';
import { AuthActionType, MeetingActionType, TranscriptionActionType } from '../action-types';

// Auth Action Creators
export const loginUser = (credentials: LoginCredentials) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionType.LOGIN, payload: credentials });
    
    try {
      // API call would go here
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        dispatch({ 
          type: AuthActionType.LOGIN_SUCCESS, 
          payload: { user: data.user, token: data.token } 
        });
      } else {
        dispatch({ type: AuthActionType.LOGIN_FAILURE, payload: data.message });
      }
    } catch (error) {
      dispatch({ 
        type: AuthActionType.LOGIN_FAILURE, 
        payload: 'Login failed. Please try again.' 
      });
    }
  };
};

export const registerUser = (userData: RegisterData) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionType.REGISTER, payload: userData });
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        dispatch({ 
          type: AuthActionType.REGISTER_SUCCESS, 
          payload: { user: data.user, token: data.token } 
        });
      } else {
        dispatch({ type: AuthActionType.REGISTER_FAILURE, payload: data.message });
      }
    } catch (error) {
      dispatch({ 
        type: AuthActionType.REGISTER_FAILURE, 
        payload: 'Registration failed. Please try again.' 
      });
    }
  };
};

export const logoutUser = () => {
  return { type: AuthActionType.LOGOUT };
};

// Meeting Action Creators
export const createMeeting = (meetingData: CreateMeetingData) => {
  return async (dispatch: Dispatch<MeetingAction>) => {
    dispatch({ type: MeetingActionType.CREATE_MEETING, payload: meetingData });
    
    try {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(meetingData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        dispatch({ type: MeetingActionType.CREATE_MEETING_SUCCESS, payload: data });
      } else {
        dispatch({ type: MeetingActionType.CREATE_MEETING_FAILURE, payload: data.message });
      }
    } catch (error) {
      dispatch({ 
        type: MeetingActionType.CREATE_MEETING_FAILURE, 
        payload: 'Failed to create meeting.' 
      });
    }
  };
};

export const joinMeeting = (meetingId: string, userId: string) => {
  return async (dispatch: Dispatch<MeetingAction>) => {
    dispatch({ type: MeetingActionType.JOIN_MEETING, payload: { meetingId, userId } });
    
    try {
      const response = await fetch(`/api/meetings/${meetingId}/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        dispatch({ type: MeetingActionType.JOIN_MEETING_SUCCESS, payload: data });
      } else {
        dispatch({ type: MeetingActionType.JOIN_MEETING_FAILURE, payload: data.message });
      }
    } catch (error) {
      dispatch({ 
        type: MeetingActionType.JOIN_MEETING_FAILURE, 
        payload: 'Failed to join meeting.' 
      });
    }
  };
};

export const toggleAudio = (enabled: boolean) => ({
  type: MeetingActionType.TOGGLE_AUDIO,
  payload: enabled,
});

export const toggleVideo = (enabled: boolean) => ({
  type: MeetingActionType.TOGGLE_VIDEO,
  payload: enabled,
});

export const toggleScreenShare = (enabled: boolean) => ({
  type: MeetingActionType.TOGGLE_SCREEN_SHARE,
  payload: enabled,
});

