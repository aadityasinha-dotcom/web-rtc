import { MeetingActionType } from '../action-types';

export interface Meeting {
  id: string;
  title: string;
  hostId: string;
  participants: Participant[];
  isActive: boolean;
  startTime: Date;
  endTime?: Date;
  settings: MeetingSettings;
}

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

export interface MeetingSettings {
  allowRecording: boolean;
  enableTranscription: boolean;
  enableVirtualBackground: boolean;
  maxParticipants: number;
  requireAuth: boolean;
}

export interface CreateMeetingData {
  title: string;
  settings: Partial<MeetingSettings>;
  scheduledTime?: Date;
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

// Action Interfaces
export interface ICreateMeeting {
  type: MeetingActionType.CREATE_MEETING;
  payload: CreateMeetingData;
}

export interface ICreateMeetingSuccess {
  type: MeetingActionType.CREATE_MEETING_SUCCESS;
  payload: Meeting;
}

export interface ICreateMeetingFailure {
  type: MeetingActionType.CREATE_MEETING_FAILURE;
  payload: string;
}

export interface IJoinMeeting {
  type: MeetingActionType.JOIN_MEETING;
  payload: { meetingId: string; userId: string };
}

export interface IJoinMeetingSuccess {
  type: MeetingActionType.JOIN_MEETING_SUCCESS;
  payload: Meeting;
}

export interface IJoinMeetingFailure {
  type: MeetingActionType.JOIN_MEETING_FAILURE;
  payload: string;
}

export interface ILeaveMeeting {
  type: MeetingActionType.LEAVE_MEETING;
}

export interface IEndMeeting {
  type: MeetingActionType.END_MEETING;
}

export interface IUpdateParticipants {
  type: MeetingActionType.UPDATE_PARTICIPANTS;
  payload: Participant[];
}

export interface IToggleAudio {
  type: MeetingActionType.TOGGLE_AUDIO;
  payload: boolean;
}

export interface IToggleVideo {
  type: MeetingActionType.TOGGLE_VIDEO;
  payload: boolean;
}

export interface IToggleScreenShare {
  type: MeetingActionType.TOGGLE_SCREEN_SHARE;
  payload: boolean;
}

export interface IStartRecording {
  type: MeetingActionType.START_RECORDING;
}

export interface IStopRecording {
  type: MeetingActionType.STOP_RECORDING;
}

export type MeetingAction =
  | ICreateMeeting
  | ICreateMeetingSuccess
  | ICreateMeetingFailure
  | IJoinMeeting
  | IJoinMeetingSuccess
  | IJoinMeetingFailure
  | ILeaveMeeting
  | IEndMeeting
  | IUpdateParticipants
  | IToggleAudio
  | IToggleVideo
  | IToggleScreenShare
  | IStartRecording
  | IStopRecording;

