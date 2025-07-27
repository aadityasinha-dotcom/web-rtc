import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';
import { meetingReducer } from './reducers/meeting.reducer';
import { transcriptionReducer } from './reducers/transcription.reducer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      meeting: meetingReducer,
      transcription: transcriptionReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Typed hooks
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

