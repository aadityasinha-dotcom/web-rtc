import { IResumeDetail } from 'shared/interfaces/resume.interface';

export enum ResumeActionType {
  UPLOAD_RESUME = '[App] Upload Resume',
  UPLOAD_RESUME_SUCCESS = '[App] Upload Resume Success',
  UPLOAD_RESUME_FAILURE = '[App] Upload Resume Failure',

  SAVE_RESUME = '[App] Save Resume',
  SAVE_RESUME_SUCCESS = '[App] Save Resume Success',
  SAVE_RESUME_FAILURE = '[App] Save Resume Failure',

  GET_RESUME_DETAIL = '[Resume] Get Resume Detail',
  GET_RESUME_DETAIL_SUCCESS = '[Resume] Get Resume Detail Success',
  GET_RESUME_DETAIL_FAILURE = '[Resume] Get Resume Detail Failure',

  UPDATE_RESUME = '[Resume] Update Resume',
  UPDATE_RESUME_SUCCESS = '[Resume] Update Resume Success',
  UPDATE_RESUME_FAILURE = '[Resume] Update Resume Failure',
}

export interface IUploadResume {
  type: ResumeActionType.UPLOAD_RESUME;
  payload: any;
}

export interface IUploadResumeSuccess {
  type: ResumeActionType.UPLOAD_RESUME_SUCCESS;
  payload: any;
}

export interface IUploadResumeFailure {
  type: ResumeActionType.UPLOAD_RESUME_FAILURE;
  payload: any;
}

export interface ISaveResume {
  type: ResumeActionType.SAVE_RESUME;
  payload: any;
}

export interface ISaveResumeSuccess {
  type: ResumeActionType.SAVE_RESUME_SUCCESS;
  payload: any;
}

export interface ISaveResumeFailure {
  type: ResumeActionType.SAVE_RESUME_FAILURE;
  payload: any;
}

export interface IGetResumeDetail {
  type: ResumeActionType.GET_RESUME_DETAIL;
}

export interface IGetResumeDetailSuccess {
  type: ResumeActionType.GET_RESUME_DETAIL_SUCCESS;
  payload: IResumeDetail;
}

export interface IGetResumeDetailFailure {
  type: ResumeActionType.GET_RESUME_DETAIL_FAILURE;
  payload: any;
}

export interface IUpdateResume {
  type: ResumeActionType.UPDATE_RESUME;
  payload: any;
}

export interface IUpdateResumeSuccess {
  type: ResumeActionType.UPDATE_RESUME_SUCCESS;
  payload: any;
}

export interface IUpdateResumeFailure {
  type: ResumeActionType.UPDATE_RESUME_FAILURE;
  payload: any;
}

export type ResumeAction =
  | IUploadResume
  | IUploadResumeSuccess
  | IUploadResumeFailure
  | ISaveResume
  | ISaveResumeSuccess
  | ISaveResumeFailure
  | IGetResumeDetail
  | IGetResumeDetailSuccess
  | IGetResumeDetailFailure
  | IUpdateResume
  | IUpdateResumeSuccess
  | IUpdateResumeFailure;
