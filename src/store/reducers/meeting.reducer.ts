import { MeetingAction, MeetingState } from '../actions/meeting.actions';
import { MeetingActionType } from '../action-types';

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

export const meetingReducer = (state = initialState, action: MeetingAction): MeetingState => {
  switch (action.type) {
    case MeetingActionType.CREATE_MEETING:
    case MeetingActionType.JOIN_MEETING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case MeetingActionType.CREATE_MEETING_SUCCESS:
      return {
        ...state,
        currentMeeting: action.payload,
        meetings: [...state.meetings, action.payload],
        isInMeeting: true,
        loading: false,
        error: null,
      };

    case MeetingActionType.JOIN_MEETING_SUCCESS:
      return {
        ...state,
        currentMeeting: action.payload,
        isInMeeting: true,
        loading: false,
        error: null,
      };

    case MeetingActionType.CREATE_MEETING_FAILURE:
    case MeetingActionType.JOIN_MEETING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case MeetingActionType.LEAVE_MEETING:
    case MeetingActionType.END_MEETING:
      return {
        ...state,
        currentMeeting: null,
        isInMeeting: false,
        isRecording: false,
        screenSharing: false,
      };

    case MeetingActionType.UPDATE_PARTICIPANTS:
      return {
        ...state,
        currentMeeting: state.currentMeeting
          ? { ...state.currentMeeting, participants: action.payload }
          : null,
      };

    case MeetingActionType.TOGGLE_AUDIO:
      return {
        ...state,
        audioEnabled: action.payload,
      };

    case MeetingActionType.TOGGLE_VIDEO:
      return {
        ...state,
        videoEnabled: action.payload,
      };

    case MeetingActionType.TOGGLE_SCREEN_SHARE:
      return {
        ...state,
        screenSharing: action.payload,
      };

    case MeetingActionType.START_RECORDING:
      return {
        ...state,
        isRecording: true,
      };

    case MeetingActionType.STOP_RECORDING:
      return {
        ...state,
        isRecording: false,
      };

    default:
      return state;
  }
};

