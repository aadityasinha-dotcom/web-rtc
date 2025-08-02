export enum AppActionType {
  REGISTER = '[App] Register',
  REGISTER_SUCCESS = '[App] Register Success',
  REGISTER_FAILURE = '[App] Register Failure',

  OAUTH_REGISTER = '[App] OAUTH Register',
  OAUTH_REGISTER_SUCCESS = '[App] OAUTH Register Success',
  OAUTH_REGISTER_FAILURE = '[App] OAUTH Register Failure',

  LOGIN = '[App] Login',
  LOGIN_SUCCESS = '[App] Login Success',
  LOGIN_FAILURE = '[App] Login Failure',

  ADMIN_LOGIN = '[App] Admin Login',
  ADMIN_LOGIN_SUCCESS = '[App] Admin Login Success',
  ADMIN_LOGIN_FAILURE = '[App] Admin Login Failure',

  LOGOUT = '[App] Logout',
  LOGOUT_SUCCESS = '[App] Logout Success',
  LOGOUT_FAILURE = '[App] Logout Failure',

  GET_CAPTCHA = '[App] Get Captcha',
  GET_CAPTCHA_SUCCESS = '[App] Get Captcha Success',
  GET_CAPTCHA_FAILURE = '[App] Get Captcha Failure',

  GET_ADMIN_CAPTCHA = '[App] Get Captcha',
  GET_ADMIN_CAPTCHA_SUCCESS = '[App] Get Captcha Success',
  GET_ADMIN_CAPTCHA_FAILURE = '[App] Get Captcha Failure',

  FORGOT_PASSWORD = '[App] Forgot Password',
  FORGOT_PASSWORD_SUCCESS = '[App] Forgot Password Success',
  FORGOT_PASSWORD_FAILURE = '[App] Forgot Password Failure',

  RESET_PASSWORD = '[App] Reset Password',
  RESET_PASSWORD_SUCCESS = '[App] Reset Password Success',
  RESET_PASSWORD_FAILURE = '[App] Reset Password Failure',

  VERIFY_ACCOUNT = '[App] Verify Account',
  VERIFY_ACCOUNT_SUCCESS = '[App] Verify Account Success',
  VERIFY_ACCOUNT_FAILURE = '[App] Verify Account Failure',

  CHANGE_EMAIL_PHONE_OTP = '[App] Change Email Phone Otp',
  CHANGE_EMAIL_PHONE_OTP_SUCCESS = '[App] Change Email Phone Otp Success',
  CHANGE_EMAIL_PHONE_OTP_FAILURE = '[App] Change Email Phone Otp Failure',

  UPDATE_CONTACT = '[App] Update Contact',
  UPDATE_CONTACT_SUCCESS = '[App] Update Contact Success',
  UPDATE_CONTACT_FAILURE = '[App] Update Contact Failure',

  DELETE_PROFILE = '[App] Delete Profile',
  DELETE_PROFILE_SUCCESS = '[App] Delete Profile Success',
  DELETE_PROFILE_FAILURE = '[App] Delete Profile Failure',

  GET_FEATURED_JOBS = '[App] Get Featured Jobs',
  GET_FEATURED_JOBS_SUCCESS = '[App] Get Featured Jobs Success',
  GET_FEATURED_JOBS_FAILURE = '[App] Get Featured Jobs Failure',

  GET_USER_SESSION = '[App] Get User Session',
  GET_USER_SESSION_SUCCESS = '[App] Get User Session Success',
  GET_USER_SESSION_FAILURE = '[App] Get User Session Failure',

  GET_USER_SESSION_FILTERS = '[App] Get User Session',
  GET_USER_SESSION_FILTERS_SUCCESS = '[App] Get User Session Success',
  GET_USER_SESSION_FILTERS_FAILURE = '[App] Get User Session Failure',

  GET_USER_LOGS = '[App] Get User Logs',
  GET_USER_LOGS_SUCCESS = '[App] Get User Logs Success',
  GET_USER_LOGS_FAILURE = '[App] Get User Logs Failure',

  GET_USER_LOGS_FILTERS = '[App] Get User Logs',
  GET_USER_LOGS_FILTERS_SUCCESS = '[App] Get User Logs Success',
  GET_USER_LOGS_FILTERS_FAILURE = '[App] Get User Logs Failure',

  GET_USER_DETAILS = '[App] Get User Details',
  GET_USER_DETAILS_SUCCESS = '[App] Get User Details Success',
  GET_USER_DETAILS_FAILURE = '[App] Get User Details Failure',

  GET_USER_DETAILS_FILTERS = '[App] Get User Details',
  GET_USER_DETAILS_FILTERS_SUCCESS = '[App] Get User Details Success',
  GET_USER_DETAILS_FILTERS_FAILURE = '[App] Get User Details Failure',

  GET_DELETE_USER_FILTERS = '[App] Get Delete User',
  GET_DELETE_USER_FILTERS_SUCCESS = '[App] Get Delete User Success',
  GET_DELETE_USER_FILTERS_FAILURE = '[App] Get Delete User Failure',

  GET_PRE_LOGIN_LOGS_FILTERS = '[App] Get Pre Login',
  GET_PRE_LOGIN_LOGS_FILTERS_SUCCESS = '[App] Get Pre Login Logs Success',
  GET_PRE_LOGIN_LOGS_FILTERS_FAILURE = '[App] Get Pre Login Logs Failure',

  CANCEL_AUTH_MODAL = '[App] Cancel Auth Modal',
  SET_MSG = '[App] Set Message',
  CLEAR_MSG = '[App] Clear Message',
  CLEAR_APP = '[App] Clear App',
  SESSION_EXPIRED = '[App] Session Expired',
  OPEN_SIGNIN_MODAL = '[App] Open Sign In Modal',
  SET_IP_CONFIG = '[App] Set IP Config',
  AUTH_LOGIN_FAILED = '[App] Auth Login Failed',
  SET_LOGIN_TYPE = '[App] Set Login Type',
}

export interface IRegister {
  type: AppActionType.REGISTER;
  payload: any;
}

export interface IRegisterSuccess {
  type: AppActionType.REGISTER_SUCCESS;
  payload: any;
}

export interface IRegisterFailure {
  type: AppActionType.REGISTER_FAILURE;
  payload: any;
}

export interface IOauthRegister {
  type: AppActionType.OAUTH_REGISTER;
  payload: any;
}

export interface IOauthRegisterSuccess {
  type: AppActionType.OAUTH_REGISTER_SUCCESS;
  payload: any;
}

export interface IOauthRegisterFailure {
  type: AppActionType.OAUTH_REGISTER_FAILURE;
  payload: any;
}


export interface ILogin {
  type: AppActionType.LOGIN;
  payload: any;
}

export interface ILoginSuccess {
  type: AppActionType.LOGIN_SUCCESS;
  payload: any;
}

export interface ILoginFailure {
  type: AppActionType.LOGIN_FAILURE;
  payload: any;
}

export interface IAdminLogin {
  type: AppActionType.ADMIN_LOGIN;
  payload: any;
}

export interface IAdminLoginSuccess {
  type: AppActionType.ADMIN_LOGIN_SUCCESS;
  payload: any;
}

export interface IAdminLoginFailure {
  type: AppActionType.ADMIN_LOGIN_FAILURE;
  payload: any;
}

export interface IGetCaptcha {
  type: AppActionType.GET_CAPTCHA;
}

export interface IGetCaptchaSuccess {
  type: AppActionType.GET_CAPTCHA_SUCCESS;
  payload: any;
}

export interface IGetCaptchaFailure {
  type: AppActionType.GET_CAPTCHA_FAILURE;
  payload: any;
}

export interface IGetAdminCaptcha {
  type: AppActionType.GET_ADMIN_CAPTCHA;
}

export interface IGetAdminCaptchaSuccess {
  type: AppActionType.GET_ADMIN_CAPTCHA_SUCCESS;
  payload: any;
}

export interface IGetAdminCaptchaFailure {
  type: AppActionType.GET_ADMIN_CAPTCHA_FAILURE;
  payload: any;
}

export interface IForgotPassword {
  type: AppActionType.FORGOT_PASSWORD;
  payload: any;
}

export interface IForgotPasswordSuccess {
  type: AppActionType.FORGOT_PASSWORD_SUCCESS;
  payload: any;
}

export interface IForgotPasswordFailure {
  type: AppActionType.FORGOT_PASSWORD_FAILURE;
  payload: any;
}

export interface IResetPassword {
  type: AppActionType.RESET_PASSWORD;
  payload: any;
}

export interface IResetPasswordSuccess {
  type: AppActionType.RESET_PASSWORD_SUCCESS;
  payload: any;
}

export interface IResetPasswordFailure {
  type: AppActionType.RESET_PASSWORD_FAILURE;
  payload: any;
}

export interface IVerifyAccount {
  type: AppActionType.VERIFY_ACCOUNT;
  payload: any;
}

export interface IVerifyAccountSuccess {
  type: AppActionType.VERIFY_ACCOUNT_SUCCESS;
  payload: any;
}

export interface IVerifyAccountFailure {
  type: AppActionType.VERIFY_ACCOUNT_FAILURE;
  payload: any;
}

export interface IChangeEmailPhoneOtp {
  type: AppActionType.CHANGE_EMAIL_PHONE_OTP;
  payload: any;
}

export interface IChangeEmailPhoneOtpSuccess {
  type: AppActionType.CHANGE_EMAIL_PHONE_OTP_SUCCESS;
  payload: any;
}

export interface IChangeEmailPhoneOtpFailure {
  type: AppActionType.CHANGE_EMAIL_PHONE_OTP_FAILURE;
  payload: any;
}

export interface IUpdateContact {
  type: AppActionType.UPDATE_CONTACT;
  payload: any;
}

export interface IUpdateContactSuccess {
  type: AppActionType.UPDATE_CONTACT_SUCCESS;
  payload: any;
}

export interface IUpdateContactFailure {
  type: AppActionType.UPDATE_CONTACT_FAILURE;
  payload: any;
}

export interface IDeleteProfile {
  type: AppActionType.DELETE_PROFILE;
  payload: any;
}

export interface IDeleteProfileSuccess {
  type: AppActionType.DELETE_PROFILE_SUCCESS;
}

export interface IDeleteProfileFailure {
  type: AppActionType.DELETE_PROFILE_FAILURE;
}

export interface IGetFeaturedJobs {
  type: AppActionType.GET_FEATURED_JOBS;
  payload: any;
}

export interface IGetFeaturedJobsSuccess {
  type: AppActionType.GET_FEATURED_JOBS_SUCCESS;
  payload: any;
}

export interface IGetFeaturedJobsFailure {
  type: AppActionType.GET_FEATURED_JOBS_FAILURE;
  payload: any;
}

export interface IGetUserSession {
  type: AppActionType.GET_USER_SESSION;
  payload: any;
}

export interface IGetUserSessionSuccess {
  type: AppActionType.GET_USER_SESSION_SUCCESS;
  payload: any;
}

export interface IGetUserSessionFailure {
  type: AppActionType.GET_USER_SESSION_FAILURE;
  payload: any;
}

export interface IGetUserSessionFilters {
  type: AppActionType.GET_USER_SESSION_FILTERS;
  payload: any;
}

export interface IGetUserSessionFiltersSuccess {
  type: AppActionType.GET_USER_SESSION_FILTERS_SUCCESS;
  payload: any;
}

export interface IGetUserSessionFiltersFailure {
  type: AppActionType.GET_USER_SESSION_FILTERS_FAILURE;
  payload: any;
}

export interface IGetUserLogs {
  type: AppActionType.GET_USER_LOGS;
  payload: any;
}

export interface IGetUserLogsSuccess {
  type: AppActionType.GET_USER_LOGS_SUCCESS;
  payload: any;
}

export interface IGetUserLogsFailure {
  type: AppActionType.GET_USER_LOGS_FAILURE;
  payload: any;
}

export interface IGetUserLogsFilters {
  type: AppActionType.GET_USER_LOGS_FILTERS;
  payload: any;
}

export interface IGetUserLogsFiltersSuccess {
  type: AppActionType.GET_USER_LOGS_FILTERS_SUCCESS;
  payload: any;
}

export interface IGetUserLogsFiltersFailure {
  type: AppActionType.GET_USER_LOGS_FILTERS_FAILURE;
  payload: any;
}

export interface IGetUserDetails {
  type: AppActionType.GET_USER_DETAILS;
  payload: any;
}

export interface IGetUserDetailsSuccess {
  type: AppActionType.GET_USER_DETAILS_SUCCESS;
  payload: any;
}

export interface IGetUserDetailsFailure {
  type: AppActionType.GET_USER_DETAILS_FAILURE;
  payload: any;
}

export interface IGetUserDetailsFilters {
  type: AppActionType.GET_USER_DETAILS_FILTERS;
  payload: any;
}

export interface IGetUserDetailsFiltersSuccess {
  type: AppActionType.GET_USER_DETAILS_FILTERS_SUCCESS;
  payload: any;
}

export interface IGetUserDetailsFiltersFailure {
  type: AppActionType.GET_USER_DETAILS_FILTERS_FAILURE;
  payload: any;
}

export interface IGetDeleteUserFilters {
  type: AppActionType.GET_DELETE_USER_FILTERS;
  payload: any;
}

export interface IGetDeleteUserFiltersSuccess {
  type: AppActionType.GET_DELETE_USER_FILTERS_SUCCESS;
  payload: any;
}

export interface IGetDeleteUserFiltersFailure {
  type: AppActionType.GET_DELETE_USER_FILTERS_FAILURE;
  payload: any;
}

export interface IGetPreLoginLogsFilters {
  type: AppActionType.GET_PRE_LOGIN_LOGS_FILTERS;
  payload: any;
}

export interface IGetPreLoginLogsFiltersSuccess {
  type: AppActionType.GET_PRE_LOGIN_LOGS_FILTERS_SUCCESS;
  payload: any;
}

export interface IGetPreLoginLogsFiltersFailure {
  type: AppActionType.GET_PRE_LOGIN_LOGS_FILTERS_FAILURE;
  payload: any;
}

export interface ICancelAuthModal {
  type: AppActionType.CANCEL_AUTH_MODAL;
}

export interface IAuthLoginFailed {
  type: AppActionType.AUTH_LOGIN_FAILED;
}

export interface ISetMessage {
  type: AppActionType.SET_MSG;
  payload: string | undefined;
}

export interface IClearMessage {
  type: AppActionType.CLEAR_MSG;
}

export interface IClearApp {
  type: AppActionType.CLEAR_APP;
}

export interface ISessionExpired {
  type: AppActionType.SESSION_EXPIRED;
  payload: boolean | undefined;
}

export interface IOpenSigninModal {
  type: AppActionType.OPEN_SIGNIN_MODAL;
}

export interface ISetIPConfig {
  type: AppActionType.SET_IP_CONFIG;
  payload: any;
}
export interface ISetLoginType {
  type: AppActionType.SET_LOGIN_TYPE;
  payload: string;
}

export interface ILogout {
  type: AppActionType.LOGOUT;
}

export interface ILogoutSuccess {
  type: AppActionType.LOGOUT_SUCCESS;
  payload: any;
}

export interface ILogoutFailure {
  type: AppActionType.LOGOUT_FAILURE;
  payload: any;
}


export type AppAction =
  | IRegister
  | IRegisterSuccess
  | IRegisterFailure
  | IOauthRegister
  | IOauthRegisterSuccess
  | IOauthRegisterFailure
  | ILogin
  | ILoginSuccess
  | ILoginFailure
  | IAdminLogin
  | IAdminLoginSuccess
  | IAdminLoginFailure
  | ILogout
  | ILogoutSuccess
  | ILogoutFailure
  | IGetCaptcha
  | IGetCaptchaSuccess
  | IGetCaptchaFailure
  | IGetAdminCaptcha
  | IGetAdminCaptchaSuccess
  | IGetAdminCaptchaFailure
  | IForgotPassword
  | IForgotPasswordSuccess
  | IForgotPasswordFailure
  | IResetPassword
  | IResetPasswordSuccess
  | IResetPasswordFailure
  | ICancelAuthModal
  | IVerifyAccount
  | IVerifyAccountSuccess
  | IVerifyAccountFailure
  | IChangeEmailPhoneOtp
  | IChangeEmailPhoneOtpSuccess
  | IChangeEmailPhoneOtpFailure
  | IUpdateContact
  | IUpdateContactSuccess
  | IUpdateContactFailure
  | IDeleteProfile
  | IDeleteProfileSuccess
  | IDeleteProfileFailure
  | IGetFeaturedJobs
  | IGetFeaturedJobsSuccess
  | IGetFeaturedJobsFailure
  | IGetUserSession
  | IGetUserSessionSuccess
  | IGetUserSessionFailure
  | IGetUserSessionFilters
  | IGetUserSessionFiltersSuccess
  | IGetUserSessionFiltersFailure
  | IGetUserLogs
  | IGetUserLogsSuccess
  | IGetUserLogsFailure
  | IGetUserLogsFilters
  | IGetUserLogsFiltersSuccess
  | IGetUserLogsFiltersFailure
  | IGetUserDetails
  | IGetUserDetailsSuccess
  | IGetUserDetailsFailure
  | IGetUserDetailsFilters
  | IGetUserDetailsFiltersSuccess
  | IGetUserDetailsFiltersFailure
  | IGetDeleteUserFilters
  | IGetDeleteUserFiltersSuccess
  | IGetDeleteUserFiltersFailure
  | IGetPreLoginLogsFilters
  | IGetPreLoginLogsFiltersSuccess
  | IGetPreLoginLogsFiltersFailure
  | IAuthLoginFailed
  | ISetMessage
  | IClearMessage
  | ISetIPConfig
  | IClearApp
  | ISessionExpired
  | IOpenSigninModal
  | ISetLoginType;
