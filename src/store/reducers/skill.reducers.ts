import {
  IAssessmentPreview,
  ISkillResult,
  ITestTopic,
} from 'shared/interfaces/skill.interface';
import { SkillAction, SkillActionType } from '../action-types/skill.types';

export interface IAssessmentInitialState {
  isLoading: boolean;
  skillTopics: ITestTopic[];
  selectedSkill: string | undefined;
  assessmentQuestions: any[];
  assessmentPreview: IAssessmentPreview[];
  assessmentResult: ISkillResult | undefined;
}

const initialState: IAssessmentInitialState = {
  isLoading: false,
  skillTopics: [],
  selectedSkill: undefined,
  assessmentQuestions: [],
  assessmentPreview: [],
  assessmentResult: undefined,
};

export default function skillReducers(
  state: IAssessmentInitialState = initialState,
  action: SkillAction
) {
  switch (action.type) {
    case SkillActionType.GET_SKILLS_LIST:
    case SkillActionType.GET_ASSESSMENT_QUESTIONS:
    case SkillActionType.SUBMIT_ASSESSMENT:
    case SkillActionType.GET_SELECTED_ANSWER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SkillActionType.GET_SKILLS_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        skillTopics: action.payload,
      };
    }
    case SkillActionType.SELECT_SKILL_TOPIC: {
      return {
        ...state,
        selectedSkill: action.payload,
      };
    }
    case SkillActionType.SUBMIT_ASSESSMENT_SUCCESS: {
      return {
        ...state,
        assessmentResult: action.payload,
      };
    }
    case SkillActionType.GET_ASSESSMENT_QUESTIONS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        assessmentQuestions: action.payload,
      };
    }
    case SkillActionType.GET_SELECTED_ANSWER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        assessmentPreview: action.payload,
      };
    }
    case SkillActionType.GET_SKILLS_LIST_FAILURE:
    case SkillActionType.GET_ASSESSMENT_QUESTIONS_FAILURE:
    case SkillActionType.SUBMIT_ASSESSMENT_FAILURE:
    case SkillActionType.GET_SELECTED_ANSWER_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
