// Authentication Actions
export enum AuthActionType {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register Success',
  REGISTER_FAILURE = '[Auth] Register Failure',
  REFRESH_TOKEN = '[Auth] Refresh Token',
}

// Meeting Actions
export enum MeetingActionType {
  CREATE_MEETING = '[Meeting] Create Meeting',
  CREATE_MEETING_SUCCESS = '[Meeting] Create Meeting Success',
  CREATE_MEETING_FAILURE = '[Meeting] Create Meeting Failure',
  JOIN_MEETING = '[Meeting] Join Meeting',
  JOIN_MEETING_SUCCESS = '[Meeting] Join Meeting Success',
  JOIN_MEETING_FAILURE = '[Meeting] Join Meeting Failure',
  LEAVE_MEETING = '[Meeting] Leave Meeting',
  END_MEETING = '[Meeting] End Meeting',
  UPDATE_PARTICIPANTS = '[Meeting] Update Participants',
  TOGGLE_AUDIO = '[Meeting] Toggle Audio',
  TOGGLE_VIDEO = '[Meeting] Toggle Video',
  TOGGLE_SCREEN_SHARE = '[Meeting] Toggle Screen Share',
  START_RECORDING = '[Meeting] Start Recording',
  STOP_RECORDING = '[Meeting] Stop Recording',
}

// WebRTC Actions
export enum WebRTCActionType {
  INITIALIZE_PEER_CONNECTION = '[WebRTC] Initialize Peer Connection',
  PEER_CONNECTION_SUCCESS = '[WebRTC] Peer Connection Success',
  PEER_CONNECTION_FAILURE = '[WebRTC] Peer Connection Failure',
  ADD_ICE_CANDIDATE = '[WebRTC] Add ICE Candidate',
  SET_LOCAL_DESCRIPTION = '[WebRTC] Set Local Description',
  SET_REMOTE_DESCRIPTION = '[WebRTC] Set Remote Description',
  UPDATE_CONNECTION_STATE = '[WebRTC] Update Connection State',
}

// Transcription Actions
export enum TranscriptionActionType {
  START_TRANSCRIPTION = '[Transcription] Start Transcription',
  STOP_TRANSCRIPTION = '[Transcription] Stop Transcription',
  UPDATE_TRANSCRIPT = '[Transcription] Update Transcript',
  TRANSCRIPTION_ERROR = '[Transcription] Transcription Error',
  GENERATE_SUMMARY = '[Transcription] Generate Summary',
  SUMMARY_SUCCESS = '[Transcription] Summary Success',
}

// UI Actions
export enum UIActionType {
  SET_LOADING = '[UI] Set Loading',
  SET_ERROR = '[UI] Set Error',
  CLEAR_ERROR = '[UI] Clear Error',
  TOGGLE_SIDEBAR = '[UI] Toggle Sidebar',
  SET_THEME = '[UI] Set Theme',
  SHOW_NOTIFICATION = '[UI] Show Notification',
  HIDE_NOTIFICATION = '[UI] Hide Notification',
}

