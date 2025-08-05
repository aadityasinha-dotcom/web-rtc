import { IResumeDetail } from 'shared/interfaces/resume.interface';
import {
  ResumeAction,
  ResumeActionType,
} from '../action-types/resume.types';

export interface IResumeInitialState {
  resumeData: any;
  resumeDetails: IResumeDetail | undefined;
  isLoading: boolean;
  resumeUploading: boolean;
  resumeUpdating: boolean;
}

const initialState: IResumeInitialState = {
  resumeData: undefined,
  resumeDetails: undefined,
  isLoading: false,
  resumeUploading: false,
  resumeUpdating: false,
};

export default function resumeReducers(
  state: IResumeInitialState = initialState,
  action: ResumeAction
) {
  switch (action.type) {
    case ResumeActionType.UPLOAD_RESUME_SUCCESS:
      case ResumeActionType.SAVE_RESUME_SUCCESS: {
        return {
          ...state,
          resumeUploading: false,
          resumeData: action.payload,
        };
      }
        case ResumeActionType.UPLOAD_RESUME:
        case ResumeActionType.SAVE_RESUME: {
          return {
            ...state,
            resumeUploading: true,
          };
        }
        case ResumeActionType.UPLOAD_RESUME_FAILURE:
        case ResumeActionType.SAVE_RESUME_FAILURE: {
          return {
            ...state,
            resumeUploading: false,
            error: action.payload,
          };
        }
    case ResumeActionType.GET_RESUME_DETAIL_SUCCESS: {
      return {
        ...state,
        resumeDetails: action.payload,
      };
    }
    case ResumeActionType.UPDATE_RESUME: {
      return {
        ...state,
        resumeUpdating: true,
      };
    }
    case ResumeActionType.UPDATE_RESUME_SUCCESS:
    case ResumeActionType.UPDATE_RESUME_FAILURE: {
      return {
        ...state,
        resumeUpdating: false,
      };
    }
    default:
      return state;
  }
}
