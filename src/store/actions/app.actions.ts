import {
  loginApi,
  adminLoginApi,
  logoutApi,
  registerApi,
  oauthRegisterApi,
  uploadResumeApi,
  saveResumeApi,
  forgotPasswordApi,
  resetPasswordApi,
  verifyAccountApi,
  verifyAuthenticateAccountApi,
  changeEmailPhoneOtpApi,
  updateContactApi,
  deleteProfileApi,
  getFeaturedJobsApi,
  getUserSessionApi,
  getUserSessionFiltersApi,
  getUserLogsFiltersApi,
  getUserDetailsFiltersApi,
  getDeleteUserFiltersApi,
  getPreLoginLogsFiltersApi,
  getCaptchaApi,
  getAdminCaptchaApi,
  getUserLogsApi,
  getUserDetailsApi,
} from '../../core/api/app.api';
import Router from 'next/router';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppAction, AppActionType } from '../../store/action-types/app.types';

export const register: AppAction = {
  type: AppActionType.REGISTER,
  payload: undefined,
};

export const registerSuccess: AppAction = {
  type: AppActionType.REGISTER_SUCCESS,
  payload: undefined,
};

export const registerFailure: AppAction = {
  type: AppActionType.REGISTER_FAILURE,
  payload: undefined,
};

export const oauthRegister: AppAction = {
  type: AppActionType.OAUTH_REGISTER,
  payload: undefined,
};

export const oauthRegisterSuccess: AppAction = {
  type: AppActionType.OAUTH_REGISTER_SUCCESS,
  payload: undefined,
};

export const oauthRegisterFailure: AppAction = {
  type: AppActionType.OAUTH_REGISTER_FAILURE,
  payload: undefined,
};


export const login: AppAction = {
  type: AppActionType.LOGIN,
  payload: undefined,
};

export const loginSuccess: AppAction = {
  type: AppActionType.LOGIN_SUCCESS,
  payload: undefined,
};

export const loginFailure: AppAction = {
  type: AppActionType.LOGIN_FAILURE,
  payload: undefined,
};

export const adminLogin: AppAction = {
  type: AppActionType.ADMIN_LOGIN,
  payload: undefined,
};

export const adminLoginSuccess: AppAction = {
  type: AppActionType.ADMIN_LOGIN_SUCCESS,
  payload: undefined,
};

export const adminLoginFailure: AppAction = {
  type: AppActionType.ADMIN_LOGIN_FAILURE,
  payload: undefined,
};

export const forgotPassword: AppAction = {
  type: AppActionType.FORGOT_PASSWORD,
  payload: undefined,
};

export const resetPassword: AppAction = {
  type: AppActionType.RESET_PASSWORD,
  payload: undefined,
};

export const forgotPasswordSuccess: AppAction = {
  type: AppActionType.FORGOT_PASSWORD_SUCCESS,
  payload: undefined,
};

export const forgotPasswordFailure: AppAction = {
  type: AppActionType.FORGOT_PASSWORD_FAILURE,
  payload: undefined,
};

export const verifyAccount: AppAction = {
  type: AppActionType.VERIFY_ACCOUNT,
  payload: undefined,
};

export const verifyAccountSuccess: AppAction = {
  type: AppActionType.VERIFY_ACCOUNT_SUCCESS,
  payload: undefined,
};

export const verifyAccountFailure: AppAction = {
  type: AppActionType.VERIFY_ACCOUNT_FAILURE,
  payload: undefined,
};

export const changeEmailPhoneOtp: AppAction = {
  type: AppActionType.CHANGE_EMAIL_PHONE_OTP,
  payload: undefined,
};

export const changeEmailPhoneOtpSuccess: AppAction = {
  type: AppActionType.CHANGE_EMAIL_PHONE_OTP_SUCCESS,
  payload: undefined,
};

export const changeEmailPhoneOtpFailure: AppAction = {
  type: AppActionType.CHANGE_EMAIL_PHONE_OTP_FAILURE,
  payload: undefined,
};

export const updateContact: AppAction = {
  type: AppActionType.UPDATE_CONTACT,
  payload: undefined,
};

export const updateContactSuccess: AppAction = {
  type: AppActionType.UPDATE_CONTACT_SUCCESS,
  payload: undefined,
};

export const updateContactFailure: AppAction = {
  type: AppActionType.UPDATE_CONTACT_FAILURE,
  payload: undefined,
};


export const deleteProfile: AppAction = {
  type: AppActionType.DELETE_PROFILE,
  payload: undefined,
};

export const deleteProfileSuccess: AppAction = {
  type: AppActionType.DELETE_PROFILE_SUCCESS,
};

export const deleteProfileFailure: AppAction = {
  type: AppActionType.DELETE_PROFILE_FAILURE,
};

export const getFeaturedJobs: AppAction = {
  type: AppActionType.GET_FEATURED_JOBS,
  payload: undefined,
};

export const getFeaturedJobsSuccess: AppAction = {
  type: AppActionType.GET_FEATURED_JOBS_SUCCESS,
  payload: undefined,
};

export const getFeaturedJobsFailure: AppAction = {
  type: AppActionType.GET_FEATURED_JOBS_FAILURE,
  payload: undefined,
};

export const getUserSession: AppAction = {
  type: AppActionType.GET_USER_SESSION,
  payload: undefined,
};

export const getUserSessionSuccess: AppAction = {
  type: AppActionType.GET_USER_SESSION_SUCCESS,
  payload: undefined,
};

export const getUserSesionFailure: AppAction = {
  type: AppActionType.GET_USER_SESSION_FAILURE,
  payload: undefined,
};

export const getUserSessionFilters: AppAction = {
  type: AppActionType.GET_USER_SESSION_FILTERS,
  payload: undefined,
};

export const getUserSessionFilterSuccess: AppAction = {
  type: AppActionType.GET_USER_SESSION_FILTERS_SUCCESS,
  payload: undefined,
};

export const getUserSesionFiltersFailure: AppAction = {
  type: AppActionType.GET_USER_SESSION_FILTERS_FAILURE,
  payload: undefined,
};

export const getUserLogsFilters: AppAction = {
  type: AppActionType.GET_USER_LOGS_FILTERS,
  payload: undefined,
};

export const getUserLogsFilterSuccess: AppAction = {
  type: AppActionType.GET_USER_LOGS_FILTERS_SUCCESS,
  payload: undefined,
};

export const getUserLogsFiltersFailure: AppAction = {
  type: AppActionType.GET_USER_LOGS_FILTERS_FAILURE,
  payload: undefined,
};

export const getUserDetailsFilters: AppAction = {
  type: AppActionType.GET_USER_DETAILS_FILTERS,
  payload: undefined,
};

export const getUserDetailsFilterSuccess: AppAction = {
  type: AppActionType.GET_USER_DETAILS_FILTERS_SUCCESS,
  payload: undefined,
};

export const getUserDetailsFiltersFailure: AppAction = {
  type: AppActionType.GET_USER_DETAILS_FILTERS_FAILURE,
  payload: undefined,
};

export const getDeleteUserFilters: AppAction = {
  type: AppActionType.GET_DELETE_USER_FILTERS,
  payload: undefined,
};

export const getDeleteUserFilterSuccess: AppAction = {
  type: AppActionType.GET_DELETE_USER_FILTERS_SUCCESS,
  payload: undefined,
};

export const getDeleteUserFiltersFailure: AppAction = {
  type: AppActionType.GET_DELETE_USER_FILTERS_FAILURE,
  payload: undefined,
};

export const getPreLoginLogsFilters: AppAction = {
  type: AppActionType.GET_PRE_LOGIN_LOGS_FILTERS,
  payload: undefined,
};

export const getPreLoginLogsFilterSuccess: AppAction = {
  type: AppActionType.GET_PRE_LOGIN_LOGS_FILTERS_SUCCESS,
  payload: undefined,
};

export const getPreLoginLogsFiltersFailure: AppAction = {
  type: AppActionType.GET_PRE_LOGIN_LOGS_FILTERS_FAILURE,
  payload: undefined,
};

export const getUserLogs: AppAction = {
  type: AppActionType.GET_USER_LOGS,
  payload: undefined,
};

export const getUserLogsSuccess: AppAction = {
  type: AppActionType.GET_USER_LOGS_SUCCESS,
  payload: undefined,
};

export const getUserLogsFailure: AppAction = {
  type: AppActionType.GET_USER_LOGS_FAILURE,
  payload: undefined,
};

export const getUserDetails: AppAction = {
  type: AppActionType.GET_USER_DETAILS,
  payload: undefined,
};

export const getUserDetailsSuccess: AppAction = {
  type: AppActionType.GET_USER_DETAILS_SUCCESS,
  payload: undefined,
};

export const getUserDetailsFailure: AppAction = {
  type: AppActionType.GET_USER_DETAILS_FAILURE,
  payload: undefined,
};

export const cancelAuthModal: AppAction = {
  type: AppActionType.CANCEL_AUTH_MODAL,
};

export const authLoginFailed: AppAction = {
  type: AppActionType.AUTH_LOGIN_FAILED,
};

export const setMessage: AppAction = {
  type: AppActionType.SET_MSG,
  payload: undefined,
};

export const clearMessage: AppAction = {
  type: AppActionType.CLEAR_MSG,
};

export const clearApp: AppAction = {
  type: AppActionType.CLEAR_APP,
};

export const setIPConfig: AppAction = {
  type: AppActionType.SET_IP_CONFIG,
  payload: undefined,
};

export const logout: AppAction = {
  type: AppActionType.LOGOUT,
};

export const registerAction =
  (registerData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(register);
      const response = await registerApi(registerData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch(registerSuccess);
        Router.push('/');
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.REGISTER_FAILURE,
        payload: error.message,
      });
    }
  };

export const oauthRegisterAction =
  (registerData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(oauthRegister);
      const response = await oauthRegisterApi(registerData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch(oauthRegisterSuccess);
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.OAUTH_REGISTER_FAILURE,
        payload: error.message,
      });
    }
  };

export const loginAction =
  (loginData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(login);
      const response: any = await loginApi(loginData);
      if (response.data.message === 'ERROR') {
        dispatch({
          type: AppActionType.LOGIN_FAILURE,
          payload: {
            error: response.data.description,
            showCaptcha: response.data.showCaptcha,
          },
        });
        throw new Error(response.data);
      } else {
        dispatch({
          type: AppActionType.LOGIN_SUCCESS,
          payload: response.data.jwt,
        });
        Router.push('/profile');
      }
    } catch (error: any) {
      // console.log(error);
      // dispatch({
      //   type: AppActionType.LOGIN_FAILURE,
      //   payload: {
      //     error: error.message,
      //     captcha: error.captcha
      //   },
      // });
    }
  };

export const adminLoginAction =
  (loginData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(adminLogin);
      const response: any = await adminLoginApi(loginData);
      if (response.data.message === 'ERROR') {
        dispatch({
          type: AppActionType.ADMIN_LOGIN_FAILURE,
          payload: {
            error: response.data.description,
            showCaptcha: response.data.showCaptcha,
          },
        });
        throw new Error(response.data);
      } else {
        dispatch({
          type: AppActionType.ADMIN_LOGIN_SUCCESS,
          payload: response.data.jwt,
        });
      }
    } catch (error: any) {
      // console.log(error);
      // dispatch({
      //   type: AppActionType.LOGIN_FAILURE,
      //   payload: {
      //     error: error.message,
      //     captcha: error.captcha
      //   },
      // });
    }
  };

export const logoutAction =
  (logoutData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(logout);
      const response: any = await logoutApi(logoutData);
      if (response.data.message === 'ERROR') {
        dispatch({
          type: AppActionType.LOGOUT_FAILURE,
          payload: {
            error: response.data.description,
          },
        });
        throw new Error(response.data);
      } else {
        dispatch({
          type: AppActionType.LOGOUT_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      // console.log(error);
      // dispatch({
      //   type: AppActionType.LOGIN_FAILURE,
      //   payload: {
      //     error: error.message,
      //     captcha: error.captcha
      //   },
      // });
    }
  };

export const getCaptchaAction =
  (emailAddress: string): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch({ type: AppActionType.GET_CAPTCHA });
      const response: any = await getCaptchaApi(emailAddress);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_CAPTCHA_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      // dispatch({
      //   type: AppActionType.GET_CAPTCHA_FAILURE,
      //   payload: error.message,
      // });
    }
  };

export const getAdminCaptchaAction =
  (emailAddress: string): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch({ type: AppActionType.GET_ADMIN_CAPTCHA });
      const response: any = await getAdminCaptchaApi(emailAddress);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_ADMIN_CAPTCHA_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      // dispatch({
      //   type: AppActionType.GET_CAPTCHA_FAILURE,
      //   payload: error.message,
      // });
    }
  };

export const forgotPasswordAction =
  (
    forgotPasswordData: any
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(forgotPassword);
      const response: any = await forgotPasswordApi(forgotPasswordData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.FORGOT_PASSWORD_SUCCESS,
          payload: undefined,
        });
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.FORGOT_PASSWORD_FAILURE,
        payload: error.message,
      });
    }
  };

export const resetPasswordAction =
  (
    resetPasswordData: any
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(resetPassword);
      const response: any = await resetPasswordApi(resetPasswordData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Password changed successfully',
        });
        dispatch({
          type: AppActionType.RESET_PASSWORD_SUCCESS,
          payload: undefined,
        });
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.REGISTER_FAILURE,
        payload: error.message,
      });
    }
  };


export const verifyAccountAction =
  (verifyAccountData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(verifyAccount);
      const response: any = await verifyAccountApi(verifyAccountData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.VERIFY_ACCOUNT_SUCCESS,
          payload: undefined,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: AppActionType.VERIFY_ACCOUNT_FAILURE,
        payload: error.message,
      });
    }
  };

export const verifyAuthenticateAccountAction =
  (verifyAccountData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(verifyAccount);
      const response: any = await verifyAuthenticateAccountApi(verifyAccountData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.VERIFY_ACCOUNT_SUCCESS,
          payload: undefined,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: AppActionType.VERIFY_ACCOUNT_FAILURE,
        payload: error.message,
      });
    }
  };


export const changeEmailPhoneOtpAction =
  (changeEmailPhoneOtpData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(changeEmailPhoneOtp);
      const response: any = await changeEmailPhoneOtpApi(changeEmailPhoneOtpData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.CHANGE_EMAIL_PHONE_OTP_SUCCESS,
          payload: undefined,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: AppActionType.CHANGE_EMAIL_PHONE_OTP_FAILURE,
        payload: error.message,
      });
    }
  };

export const updateContactAction =
  (updateContactData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(updateContact);
      const response: any = await updateContactApi(updateContactData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.UPDATE_CONTACT_SUCCESS,
          payload: response.data,
        });
        Router.replace('/profile').then(() => window.location.reload());
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: AppActionType.UPDATE_CONTACT_FAILURE,
        payload: error.message,
      });
    }
  };



export const deleteProfileAction =
  (): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(deleteProfile);
      const response = await deleteProfileApi();
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        // localStorage.clear();
        // Router.push('/');
        // dispatch(deleteProfileSuccess);
        // dispatch(clearApp);
        // dispatch({ type: AppActionType.LOGOUT });
      }
    } catch (error) {
      dispatch(deleteProfileFailure);
    }
  };

export const getFeaturedJobsAction =
  (
    getFeaturedJobsData: any
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getFeaturedJobs);
      const response = await getFeaturedJobsApi(getFeaturedJobsData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_FEATURED_JOBS_SUCCESS,
          payload: response.data.content,
          totalPages: response.data.totalPages,
        });
      }
    } catch (error) {
      dispatch(getFeaturedJobsFailure);
    }
  };

export const getUserSessionAction =
  (
    getUserSessionsData: any
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getUserSession);
      const response = await getUserSessionApi(getUserSessionsData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_USER_SESSION_SUCCESS,
          payload: response.data.content,
        });
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.GET_USER_SESSION_FAILURE,
        payload: error.message,
      });
    }
  };

export const getUserSessionFilterAction =
  (
    data: any,
    page: number,
    pageSize: number
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getUserSessionFilters);
      const response: any = await getUserSessionFiltersApi(data, page, pageSize);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        console.log(response.data);
        dispatch({
          type: AppActionType.GET_USER_SESSION_FILTERS_SUCCESS,
          payload: response.data.content,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: AppActionType.GET_USER_SESSION_FILTERS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getUserLogsAction =
  (
    getUserLogsData: any
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getUserLogs);
      const response = await getUserLogsApi(getUserLogsData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_USER_LOGS_SUCCESS,
          payload: response.data.content,
        });
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.GET_USER_LOGS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getUserLogsFilterAction =
  (
    data: any,
    page: number,
    pageSize: number
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getUserLogsFilters);
      const response: any = await getUserLogsFiltersApi(data, page, pageSize);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_USER_LOGS_FILTERS_SUCCESS,
          payload: response.data.content,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: AppActionType.GET_USER_LOGS_FILTERS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getUserDetailsAction =
  (
    getUserDetailsData: any
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getUserDetails);
      const response = await getUserDetailsApi(getUserDetailsData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_USER_DETAILS_SUCCESS,
          payload: response.data.content,
        });
      }
    } catch (error: any) {
      dispatch({
        type: AppActionType.GET_USER_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getUserDetailsFilterAction =
  (
    data: any,
    page: number,
    pageSize: number
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getUserDetailsFilters);
      const response: any = await getUserDetailsFiltersApi(data, page, pageSize);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_USER_DETAILS_FILTERS_SUCCESS,
          payload: response.data.content,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: AppActionType.GET_USER_DETAILS_FILTERS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getDeleteUserFilterAction =
  (
    data: any,
    page: number,
    pageSize: number
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getDeleteUserFilters);
      const response: any = await getDeleteUserFiltersApi(data, page, pageSize);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_DELETE_USER_FILTERS_SUCCESS,
          payload: response.data.content,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: AppActionType.GET_DELETE_USER_FILTERS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getPreLoginLogsFilterAction =
  (
    data: any,
    page: number,
    pageSize: number
  ): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(getPreLoginLogsFilters);
      const response: any = await getPreLoginLogsFiltersApi(data, page, pageSize);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.GET_PRE_LOGIN_LOGS_FILTERS_SUCCESS,
          payload: response.data.content,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: AppActionType.GET_PRE_LOGIN_LOGS_FILTERS_FAILURE,
        payload: error.message,
      });
    }
  };

export const setMessageAction =
  (message: string): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    dispatch({
      type: AppActionType.SET_MSG,
      payload: message,
    });
  };
