import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface TranscriptSegment {
  id: string;
  speakerId: string;
  speakerName: string;
  text: string;
  timestamp: Date;
  confidence: number;
  sentiment?: 'positive' | 'negative' | 'neutral';
  keywords?: string[];
}

export interface TranscriptionSummary {
  id: string;
  meetingId: string;
  summary: string;
  keyPoints: string[];
  actionItems: string[];
  decisions: string[];
  createdAt: Date;
}

export interface TranscriptionState {
  isTranscribing: boolean;
  transcript: TranscriptSegment[];
  currentSpeaker: string | null;
  summaries: TranscriptionSummary[];
  loading: boolean;
  error: string | null;
  settings: {
    autoTranscribe: boolean;
    language: string;
    showSentiment: boolean;
    showKeywords: boolean;
  };
}

const initialState: TranscriptionState = {
  isTranscribing: false,
  transcript: [],
  currentSpeaker: null,
  summaries: [],
  loading: false,
  error: null,
  settings: {
    autoTranscribe: true,
    language: 'en-US',
    showSentiment: true,
    showKeywords: true,
  },
};

// Async thunks for API calls
export const generateSummary = createAsyncThunk(
  'transcription/generateSummary',
  async (meetingId: string, { rejectWithValue, getState }) => {
    try {
      const response = await fetch('/api/transcription/summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meetingId }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Failed to generate summary');
      }
      
      return await response.json();
    } catch (error) {
      return rejectWithValue('Network error occurred');
    }
  }
);

export const exportTranscript = createAsyncThunk(
  'transcription/exportTranscript',
  async ({ meetingId, format }: { meetingId: string; format: 'txt' | 'pdf' | 'docx' }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/transcription/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meetingId, format }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Failed to export transcript');
      }
      
      return await response.json();
    } catch (error) {
      return rejectWithValue('Network error occurred');
    }
  }
);

const transcriptionSlice = createSlice({
  name: 'transcription',
  initialState,
  reducers: {
    startTranscription: (state) => {
      state.isTranscribing = true;
      state.transcript = [];
      state.error = null;
    },
    stopTranscription: (state) => {
      state.isTranscribing = false;
      state.currentSpeaker = null;
    },
    addTranscriptSegment: (state, action: PayloadAction<TranscriptSegment>) => {
      state.transcript.push(action.payload);
    },
    updateTranscriptSegment: (state, action: PayloadAction<{ id: string; updates: Partial<TranscriptSegment> }>) => {
      const index = state.transcript.findIndex(segment => segment.id === action.payload.id);
      if (index !== -1) {
        state.transcript[index] = { ...state.transcript[index], ...action.payload.updates };
      }
    },
    deleteTranscriptSegment: (state, action: PayloadAction<string>) => {
      state.transcript = state.transcript.filter(segment => segment.id !== action.payload);
    },
    clearTranscript: (state) => {
      state.transcript = [];
    },
    setCurrentSpeaker: (state, action: PayloadAction<string | null>) => {
      state.currentSpeaker = action.payload;
    },
    updateSettings: (state, action: PayloadAction<Partial<TranscriptionState['settings']>>) => {
      state.settings = { ...state.settings, ...action.payload };
    },
    addSummary: (state, action: PayloadAction<TranscriptionSummary>) => {
      state.summaries.push(action.payload);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Generate Summary cases
      .addCase(generateSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.summaries.push(action.payload);
        state.error = null;
      })
      .addCase(generateSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Export Transcript cases
      .addCase(exportTranscript.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(exportTranscript.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(exportTranscript.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  startTranscription,
  stopTranscription,
  addTranscriptSegment,
  updateTranscriptSegment,
  deleteTranscriptSegment,
  clearTranscript,
  setCurrentSpeaker,
  updateSettings,
  addSummary,
  clearError,
} = transcriptionSlice.actions;

export const transcriptionReducer = transcriptionSlice.reducer;

