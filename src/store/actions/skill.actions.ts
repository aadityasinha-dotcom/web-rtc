import {
  getSkillsListApi,
  getAssessmentQuestionsApi,
  selectSkillAnswerApi,
  submitAssessmentApi,
  getSelectedAnswerApi,
} from 'core/api/skills.api';
import Router from 'next/router';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { AppAction, AppActionType } from 'store/action-types/app.types';
import { SkillAction, SkillActionType } from 'store/action-types/skill.types';

export const getSkillsListAction =
  (params: any): ThunkAction<Promise<void>, null, null, SkillAction> =>
  async (dispatch: Dispatch<SkillAction>): Promise<void> => {
    try {
      dispatch({
        type: SkillActionType.GET_SKILLS_LIST,
        payload: undefined,
      });
      const response: any = await getSkillsListApi(params);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: SkillActionType.GET_SKILLS_LIST_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: SkillActionType.GET_SKILLS_LIST_FAILURE,
        payload: error.message,
      });
    }
  };

export const getAssessmentQuestionsAction =
  (params: any): ThunkAction<Promise<void>, null, null, SkillAction> =>
  async (dispatch: Dispatch<SkillAction | AppAction>): Promise<void> => {
    try {
      dispatch({
        type: SkillActionType.GET_ASSESSMENT_QUESTIONS,
        payload: undefined,
      });
      const response: any = await getAssessmentQuestionsApi(params);
      if (response.data.message === 'ERROR') {
        dispatch({
          type: AppActionType.SET_MSG,
          payload: response.data.description,
        });
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: SkillActionType.GET_ASSESSMENT_QUESTIONS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: SkillActionType.GET_ASSESSMENT_QUESTIONS_FAILURE,
        payload: error.message,
      });
    }
  };

export const selectAssessmentAnswerAction =
  (params: any): ThunkAction<Promise<void>, null, null, SkillAction> =>
  async (dispatch: Dispatch<SkillAction>): Promise<void> => {
    try {
      dispatch({
        type: SkillActionType.SELECT_SKILL_ANSWER,
        payload: undefined,
      });
      const response: any = await selectSkillAnswerApi(params);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: SkillActionType.SELECT_SKILL_ANSWER_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: SkillActionType.SELECT_SKILL_ANSWER_FAILURE,
        payload: error.message,
      });
    }
  };

export const getSelectedAnswerAction =
  (params: any): ThunkAction<Promise<void>, null, null, SkillAction> =>
  async (dispatch: Dispatch<SkillAction>): Promise<void> => {
    try {
      dispatch({
        type: SkillActionType.GET_SELECTED_ANSWER,
        payload: undefined,
      });
      const response: any = await getSelectedAnswerApi(params);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: SkillActionType.GET_SELECTED_ANSWER_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: SkillActionType.GET_SELECTED_ANSWER_FAILURE,
        payload: error.message,
      });
    }
  };

export const submitSkillAction =
  (params: any): ThunkAction<Promise<void>, null, null, SkillAction> =>
  async (dispatch: Dispatch<SkillAction>): Promise<void> => {
    try {
      dispatch({
        type: SkillActionType.SUBMIT_ASSESSMENT,
        payload: undefined,
      });
      const response: any = await submitAssessmentApi(params);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        Router.push('/skill/result');
        dispatch({
          type: SkillActionType.SUBMIT_ASSESSMENT_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: SkillActionType.SUBMIT_ASSESSMENT_FAILURE,
        payload: error.message,
      });
    }
  };
