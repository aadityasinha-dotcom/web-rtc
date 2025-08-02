import { IProfileFormState } from 'store/reducers/profile.reducer';

export enum ProfileActionType {
  UPDATE_PROFILE = '[Profile] Update Profile',
  UPDATE_PROFILE_SUCCESS = '[Profile] Update Profile Success',
  UPDATE_PROFILE_FAILURE = '[Profile] Update Profile Failure',

  GET_USER_DASHBOARD = '[Profile] Get User Dashboard',
  GET_USER_DASHBOARD_SUCCESS = '[Profile] Get User Dashboard Success',
  GET_USER_DASHBOARD_FAILURE = '[Profile] Get User Dashboard Failure',

  GET_PROFILE = '[Profile] Get Profile',
  GET_PROFILE_SUCCESS = '[Profile] Get Profile Success',
  GET_PROFILE_FAILURE = '[Profile] Get Profile Failure',
  
  CLEAR_MSG = '[Profile] Clear Message',
  
  UPDATE_IMAGE = '[Profile] Update image',
  UPDATE_IMAGE_SUCCESS = '[Profile] Update image Success',
  UPDATE_IMAGE_FAILURE = '[Profile] Update image Failure',
  
  DELETE_PORTFOLIO = '[Profile] Delete Portfolio',
  DELETE_PORTFOLIO_SUCCESS = '[Profile] Delete Portfolio Success',
  DELETE_PORTFOLIO_FAILURE = '[Profile] Delete Portfolio Failure',
  
  SET_MSG = '[Profile] Set Message',
  
  CLEAR_PROFILE = '[Profile] Clear App',
  
  ACCOUNT_VERIFIED = '[Profile] Account Verified',
  ACCOUNT_VERIFIED_SUCCESS = '[Profile] Account Verified Success',
  ACCOUNT_VERIFIED_FAILURE = '[Profile] Account Verified Failure',

  CHANGE_PASSWORD = '[Profile] Change Password',
  CHANGE_PASSWORD_SUCCESS = '[Profile] Change Password Success',
  CHANGE_PASSWORD_FAILURE = '[Profile] Change Password Failure',
}

export interface IUpdateProflie {
  type: ProfileActionType.UPDATE_PROFILE;
  payload: any;
}

export interface IUpdateProflieSuccess {
  type: ProfileActionType.UPDATE_PROFILE_SUCCESS;
  payload: any;
}

export interface IUpdateProflieFailure {
  type: ProfileActionType.UPDATE_PROFILE_FAILURE;
  payload: any;
}

export interface IGetUserDashboard {
  type: ProfileActionType.GET_USER_DASHBOARD;
  payload: any;
}

export interface IGetUserDashboardSuccess {
  type: ProfileActionType.GET_USER_DASHBOARD_SUCCESS;
  payload: any;
}

export interface IGetUserDashboardFailure {
  type: ProfileActionType.GET_USER_DASHBOARD_FAILURE;
  payload: IProfileFormState;
}

export interface IGetProfile {
  type: ProfileActionType.GET_PROFILE;
  payload: any;
}

export interface IGetProfileSuccess {
  type: ProfileActionType.GET_PROFILE_SUCCESS;
  payload: any;
}

export interface IGetProfileFailure {
  type: ProfileActionType.GET_PROFILE_FAILURE;
  payload: IProfileFormState;
}
export interface IClearMessage {
  type: ProfileActionType.CLEAR_MSG;
}
export interface IUpdateImage {
  type: ProfileActionType.UPDATE_IMAGE;
  payload: any;
}

export interface IUpdateImageSuccess {
  type: ProfileActionType.UPDATE_IMAGE_SUCCESS;
  payload: any;
}

export interface IUpdateImageFailure {
  type: ProfileActionType.UPDATE_IMAGE_FAILURE;
  payload: any;
}

export interface IDeletePortfolio {
  type: ProfileActionType.DELETE_PORTFOLIO;
  payload: any;
}

export interface IDeletePortfolioSuccess {
  type: ProfileActionType.DELETE_PORTFOLIO_SUCCESS;
  payload: any;
}

export interface IDeletePortfolioFailure {
  type: ProfileActionType.DELETE_PORTFOLIO_FAILURE;
  payload: any;
}

export interface IAccountVerified {
  type: ProfileActionType.ACCOUNT_VERIFIED;
  payload: any;
}

export interface IAccountVerifiedSuccess {
  type: ProfileActionType.ACCOUNT_VERIFIED_SUCCESS;
  payload: any;
}

export interface IAccountVerifiedFailure {
  type: ProfileActionType.ACCOUNT_VERIFIED_FAILURE;
  payload: any;
}

export interface IChangePassword {
  type: ProfileActionType.CHANGE_PASSWORD;
  payload: any;
}

export interface IChangePasswordSuccess {
  type: ProfileActionType.CHANGE_PASSWORD_SUCCESS;
  payload: any;
}

export interface IChangePasswordFailure {
  type: ProfileActionType.CHANGE_PASSWORD_FAILURE;
  payload: any;
}

export interface IClearApp {
  type: ProfileActionType.CLEAR_PROFILE;
}

export interface ISetMessage {
  type: ProfileActionType.SET_MSG;
  payload: string | undefined;
}

export type ProfileAction =
  | IGetUserDashboard
  | IGetUserDashboardSuccess
  | IGetUserDashboardFailure
  | IGetProfile
  | IGetProfileSuccess
  | IGetProfileFailure
  | IUpdateProflie
  | IUpdateProflieSuccess
  | IUpdateProflieFailure
  | IUpdateImage
  | IUpdateImageSuccess
  | IUpdateImageFailure
  | IDeletePortfolio
  | IDeletePortfolioSuccess
  | IDeletePortfolioFailure
  | IAccountVerified
  | IAccountVerifiedSuccess
  | IAccountVerifiedFailure
  | IChangePassword
  | IChangePasswordSuccess
  | IChangePasswordFailure
  | ISetMessage
  | IClearMessage
  | IClearApp;
