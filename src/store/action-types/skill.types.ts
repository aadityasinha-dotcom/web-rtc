export enum SkillActionType {
  GET_SKILLS_LIST = '[Skill] Get Skills List',
  GET_SKILLS_LIST_SUCCESS = '[Skill] Get Skills List Success',
  GET_SKILLS_LIST_FAILURE = '[Skill] Get Skills List Failure',

  GET_ASSESSMENT_QUESTIONS = '[Skill] Get Assessment Questions',
  GET_ASSESSMENT_QUESTIONS_SUCCESS = '[Skill] Get Assessment Questions Success',
  GET_ASSESSMENT_QUESTIONS_FAILURE = '[Skill] Get Assessment Questions Failure',

  SELECT_SKILL_ANSWER = '[Skill] Select Skill Answer',
  SELECT_SKILL_ANSWER_SUCCESS = '[Skill] Select Skill Answer Success',
  SELECT_SKILL_ANSWER_FAILURE = '[Skill] Select Skill Answer Failure',

  GET_SELECTED_ANSWER = '[Skill] Get Selected Answer',
  GET_SELECTED_ANSWER_SUCCESS = '[Skill] Get Selected Answer Success',
  GET_SELECTED_ANSWER_FAILURE = '[Skill] Get Selected Answer Failure',

  SUBMIT_ASSESSMENT = '[Skill] Submit Assessment',
  SUBMIT_ASSESSMENT_SUCCESS = '[Skill] Submit Assessment Success',
  SUBMIT_ASSESSMENT_FAILURE = '[Skill] Submit Assessment Failure',

  SELECT_SKILL_TOPIC = '[Skill] Select Skill Topic',
}

export interface IGetSkillsList {
  type: SkillActionType.GET_SKILLS_LIST;
  payload: any;
}

export interface IGetSkillsListSuccess {
  type: SkillActionType.GET_SKILLS_LIST_SUCCESS;
  payload: any;
}

export interface IGetSkillsListFailure {
  type: SkillActionType.GET_SKILLS_LIST_FAILURE;
  payload: any;
}

export interface ISelectSkillTopic {
  type: SkillActionType.SELECT_SKILL_TOPIC;
  payload: string;
}

export interface IGetAssessmentQuestions {
  type: SkillActionType.GET_ASSESSMENT_QUESTIONS;
  payload: any;
}

export interface IGetAssessmentQuestionsSuccess {
  type: SkillActionType.GET_ASSESSMENT_QUESTIONS_SUCCESS;
  payload: any;
}

export interface IGetAssessmentQuestionsFailure {
  type: SkillActionType.GET_ASSESSMENT_QUESTIONS_FAILURE;
  payload: any;
}

export interface ISelectSkillAnswer {
  type: SkillActionType.SELECT_SKILL_ANSWER;
  payload: any;
}

export interface ISelectSkillAnswerSuccess {
  type: SkillActionType.SELECT_SKILL_ANSWER_SUCCESS;
  payload: any;
}

export interface ISelectSkillAnswerFailure {
  type: SkillActionType.SELECT_SKILL_ANSWER_FAILURE;
  payload: any;
}

export interface IGetSelectedAnswer {
  type: SkillActionType.GET_SELECTED_ANSWER;
  payload: any;
}

export interface IGetSelectedAnswerSuccess {
  type: SkillActionType.GET_SELECTED_ANSWER_SUCCESS;
  payload: any;
}

export interface IGetSelectedAnswerFailure {
  type: SkillActionType.GET_SELECTED_ANSWER_FAILURE;
  payload: any;
}

export interface ISubmitAssessment {
  type: SkillActionType.SUBMIT_ASSESSMENT;
  payload: any;
}

export interface ISubmitAssessmentSuccess {
  type: SkillActionType.SUBMIT_ASSESSMENT_SUCCESS;
  payload: any;
}

export interface ISubmitAssessmentFailure {
  type: SkillActionType.SUBMIT_ASSESSMENT_FAILURE;
  payload: any;
}

export type SkillAction =
  | IGetSkillsList
  | IGetSkillsListSuccess
  | IGetSkillsListFailure
  | ISelectSkillTopic
  | IGetAssessmentQuestions
  | IGetAssessmentQuestionsSuccess
  | IGetAssessmentQuestionsFailure
  | ISelectSkillAnswer
  | ISelectSkillAnswerSuccess
  | ISelectSkillAnswerFailure
  | IGetSelectedAnswer
  | IGetSelectedAnswerSuccess
  | IGetSelectedAnswerFailure
  | ISubmitAssessment
  | ISubmitAssessmentSuccess
  | ISubmitAssessmentFailure;
