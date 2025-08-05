import { JobAction, JobActionType } from '../action-types/job.types';

export interface ProfileInitialState {
  isLoading: boolean;
  designationsList: any[];
  locationsList: any[];
  matchRate: any[];
  jobsList: any[];
  savedJobsListIds: any[];
  jobLabels: any;
  jobs: {
    content: any[];
    first: boolean;
    last: boolean;
    totalPages: number;
    empty: boolean;
    totalElements: number;
  };
  savedJobs: {
    content: any[];
    first: boolean;
    last: boolean;
    totalPages: number;
    empty: boolean;
    totalElements: number;
  };
  totalElements: number;
  advancedFilters: any[] | undefined;
}

const initialState: ProfileInitialState = {
  isLoading: false,
  designationsList: [],
  locationsList: [],
  matchRate: [],
  jobsList: [],
  savedJobsListIds: [],
  jobLabels: {
    experience: '',
    jobTag: '',
    location: '',
  },
  jobs: {
    content: [],
    first: false,
    last: false,
    totalPages: 0,
    empty: false,
    totalElements: 0,
  },
  savedJobs: {
    content: [],
    first: false,
    last: false,
    totalPages: 0,
    empty: false,
    totalElements: 0,
  },
  totalElements: 0,
  advancedFilters: undefined,
};

export default function appReducers(
  state: ProfileInitialState = initialState,
  action: JobAction
) {
  switch (action.type) {
    case JobActionType.GET_JOB_SEARCH_FILTER_SUCCESS: {
      const { jobTitle } = action.payload[0];
      const { location } = action.payload[1];
      return {
        ...state,
        locationsList: location,
        designationsList: jobTitle,
      };
    }
    case JobActionType.GET_JOB_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JobActionType.GET_JOB_LIST_SUCCESS: {
      return {
        ...state,
        jobsList: action.payload.content,
        jobs: action.payload,
        isLoading: false,
      };
    }
    case JobActionType.CLEAR_MATCH_RATE: {
      return {
        ...state,
        matchRate: [],
        error: undefined,
      };
    }
    case JobActionType.GET_SINGLE_JOB_MATCH_RATE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JobActionType.GET_SINGLE_JOB_MATCH_RATE_SUCCESS: {
      return {
        ...state,
        matchRate: action.payload,
        isLoading: false,
      };
    }
    case JobActionType.GET_SAVED_JOB_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JobActionType.GET_SAVED_JOB_LIST_SUCCESS: {
      return {
        ...state,
        savedJobs: action.payload,
        isLoading: false,
      };
    }
    case JobActionType.GET_SAVED_JOB_LIST_IDS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JobActionType.GET_SAVED_JOB_LIST_IDS_SUCCESS: {
      return {
        ...state,
        savedJobsListIds: action.payload,
        isLoading: false,
      };
    }
    case JobActionType.LIKE_SAVED_JOB_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JobActionType.LIKE_SAVED_JOB_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobActionType.REMOVE_SAVED_JOB_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JobActionType.REMOVE_SAVED_JOB_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobActionType.GET_ADVANCED_JOB_FILTERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        advancedFilters: action.payload,
      };
    }
    case JobActionType.GET_JOB_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobActionType.GET_SINGLE_JOB_MATCH_RATE_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobActionType.GET_SAVED_JOB_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobActionType.GET_SAVED_JOB_LIST_IDS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobActionType.LIKE_SAVED_JOB_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobActionType.REMOVE_SAVED_JOB_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V1: {
      return {
        ...state,
        isLoading: true,
        advancedFilters: [],
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V2: {
      return {
        ...state,
        isLoading: true,
        advancedFilters: [],
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V3: {
      return {
        ...state,
        isLoading: true,
        advancedFilters: [],
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V4: {
      return {
        ...state,
        isLoading: true,
        advancedFilters: [],
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V5: {
      return {
        ...state,
        isLoading: true,
        advancedFilters: [],
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V1_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        advancedFilters: action.payload,
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V2_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        advancedFilters: action.payload,
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V3_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        advancedFilters: action.payload,
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V4_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        advancedFilters: action.payload,
      };
    }
    case JobActionType.GET_ADMIN_FILTERS_V5_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        advancedFilters: action.payload,
      };
    }
    case JobActionType.GET_JOB_LABELS: {
      return {
        ...state,
        jobLabels: action.payload,
      };
    }
    default:
      return state;
  }
}
