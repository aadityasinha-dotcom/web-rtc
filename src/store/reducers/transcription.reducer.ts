import { TranscriptionAction, TranscriptionState } from '../actions/transcription.actions';
import { TranscriptionActionType } from '../action-types';

const initialState: TranscriptionState = {
  isTranscribing: false,
  transcript: [],
  summary: null,
  loading: false,
  error: null,
};

export const transcriptionReducer = (
  state = initialState,
  action: TranscriptionAction
): TranscriptionState => {
  switch (action.type) {
    case TranscriptionActionType.START_TRANSCRIPTION:
      return {
        ...state,
        isTranscribing: true,
        transcript: [],
        error: null,
      };

    case TranscriptionActionType.STOP_TRANSCRIPTION:
      return {
        ...state,
        isTranscribing: false,
      };

    case TranscriptionActionType.UPDATE_TRANSCRIPT:
      return {
        ...state,
        transcript: [...state.transcript, action.payload],
      };

    case TranscriptionActionType.TRANSCRIPTION_ERROR:
      return {
        ...state,
        isTranscribing: false,
        error: action.payload,
      };

    case TranscriptionActionType.GENERATE_SUMMARY:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TranscriptionActionType.SUMMARY_SUCCESS:
      return {
        ...state,
        summary: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

