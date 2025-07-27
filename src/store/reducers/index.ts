import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { meetingReducer } from './meeting.reducer';
import { transcriptionReducer } from './transcription.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  meeting: meetingReducer,
  transcription: transcriptionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

