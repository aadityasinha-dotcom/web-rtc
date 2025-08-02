import { saveResumeApi, uploadResumeApi } from 'core/api/app.api';
import {
  getResumeDetailApi,
  updateResumeApi,
} from 'core/api/resume.api';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { ResumeFormModel } from 'shared/models/resume.models';
import { AppAction, AppActionType } from 'store/action-types/app.types';
import {
  ResumeAction,
  ResumeActionType,
} from 'store/action-types/resume.types';

export const uploadResume: ResumeAction = {
  type: ResumeActionType.UPLOAD_RESUME,
  payload: undefined,
};

export const saveResume: ResumeAction = {
  type: ResumeActionType.SAVE_RESUME,
  payload: undefined,
};

export const uploadResumeAction =
  (uploadResumeData: any): ThunkAction<Promise<void>, null, null, ResumeAction> =>
  async (dispatch: Dispatch<ResumeAction | AppAction>): Promise<void> => {
    try {
      dispatch(uploadResume);
      const response = await uploadResumeApi(uploadResumeData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Resume uploaded successfully',
        });
        dispatch({
          type: ResumeActionType.UPLOAD_RESUME_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.SET_MSG,
        payload: error && error.message,
      });
      dispatch({
        type: ResumeActionType.UPLOAD_RESUME_FAILURE,
        payload: error && error.message,
      });
    }
  };

export const saveResumeAction =
  (saveResumeData: any): ThunkAction<Promise<void>, null, null, ResumeAction> =>
  async (dispatch: Dispatch<ResumeAction | AppAction>): Promise<void> => {
    try {
      dispatch(saveResume);
      const response = await saveResumeApi(saveResumeData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Resume uploaded successfully',
        });
        dispatch({
          type: ResumeActionType.SAVE_RESUME_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.SET_MSG,
        payload: error && error.message,
      });
    }
  };

export const getResumeDetailAction =
  (): ThunkAction<Promise<void>, null, null, ResumeAction> =>
  async (dispatch: Dispatch<ResumeAction>): Promise<void> => {
    try {
      dispatch({
        type: ResumeActionType.GET_RESUME_DETAIL,
      });
      const response: any = await getResumeDetailApi();
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: ResumeActionType.GET_RESUME_DETAIL_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ResumeActionType.GET_RESUME_DETAIL_FAILURE,
        payload: error.message,
      });
    }
  };

export const updateResumeAction =
  (data: any): ThunkAction<Promise<void>, null, null, ResumeAction> =>
  async (dispatch: Dispatch<ResumeAction | AppAction>): Promise<void> => {
    try {
      dispatch({
        type: ResumeActionType.UPDATE_RESUME,
        payload: data,
      });
      const response: any = await updateResumeApi(data);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: ResumeActionType.UPDATE_RESUME_SUCCESS,
          payload: response.data,
        });
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Resume Updated successfully',
        });
      }
    } catch (error: any) {
      dispatch({
        type: ResumeActionType.UPDATE_RESUME_FAILURE,
        payload: error.message,
      });
    }
  };
