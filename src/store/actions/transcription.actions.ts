import { TranscriptionActionType } from '../action-types';

export interface TranscriptSegment {
  id: string;
  speakerId: string;
  speakerName: string;
  text: string;
  timestamp: Date;
  confidence: number;
  sentiment?: 'positive' | 'negative' | 'neutral';
}

export interface MeetingSummary {
  id: string;
  meetingId: string;
  summary: string;
  keyPoints: string[];
  actionItems: string[];
  participants: string[];
  duration: number;
  generatedAt: Date;
}

export interface TranscriptionState {
  isTranscribing: boolean;
  transcript: TranscriptSegment[];
  summary: MeetingSummary | null;
  loading: boolean;
  error: string | null;
}

// Action Interfaces
export interface IStartTranscription {
  type: TranscriptionActionType.START_TRANSCRIPTION;
  payload: { meetingId: string };
}

export interface IStopTranscription {
  type: TranscriptionActionType.STOP_TRANSCRIPTION;
}

export interface IUpdateTranscript {
  type: TranscriptionActionType.UPDATE_TRANSCRIPT;
  payload: TranscriptSegment;
}

export interface ITranscriptionError {
  type: TranscriptionActionType.TRANSCRIPTION_ERROR;
  payload: string;
}

export interface IGenerateSummary {
  type: TranscriptionActionType.GENERATE_SUMMARY;
  payload: { meetingId: string; transcript: TranscriptSegment[] };
}

export interface ISummarySuccess {
  type: TranscriptionActionType.SUMMARY_SUCCESS;
  payload: MeetingSummary;
}

export type TranscriptionAction =
  | IStartTranscription
  | IStopTranscription
  | IUpdateTranscript
  | ITranscriptionError
  | IGenerateSummary
  | ISummarySuccess;

