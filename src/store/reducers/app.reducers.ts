import { Tokens } from 'shared/constants/url.constant';
import { AppAction, AppActionType } from 'store/action-types/app.types';
import moment from 'moment';
import { forgotPassword } from 'store/actions/app.actions';

interface IIPConfig {
  isoCode: string;
  dialCode: string;
}

export interface IAppInitialState {
  isPageLoading: boolean;
  isVerifyLoading: boolean;
  ipConfig: IIPConfig;
  isRegister: boolean;
  resetPassword: boolean;
  isforgotPassword: boolean;
  isChangeEmailPhone: boolean;
  verifyCurrentAccount: boolean;
  verifyNewAccount: boolean;
  verifyAccount: boolean;
  authToken: string | undefined;
  adminAuthToken: string | undefined;
  authLoginFailed: boolean;
  error: string | undefined;
  featuredJobs: Array<any>;
  sessionExpired: boolean | undefined;
  t: string | undefined;
  openSignInModal: boolean;
  isCaptchaLoading: boolean;
  captcha: string | undefined;
  showCaptcha: boolean;
  // resumeData: any;
  loginType: string | undefined;
  userSessions: any[];
  userLogs: any[];
  userDetails: any[];
}

const isBrowser = typeof window !== 'undefined';
let authToken = isBrowser && localStorage.getItem('TALENTEZZY_AUTH_TOKEN');
let adminAuthToken = isBrowser && localStorage.getItem('TALENTEZZY_ADMIN_AUTH_TOKEN');
let loginTime = isBrowser && localStorage.getItem('t');
let loginType = isBrowser && localStorage.getItem(Tokens.LOGIN_TYPE);

const initialState: IAppInitialState = {
  isPageLoading: false,
  isVerifyLoading: false,
  ipConfig: { isoCode: '', dialCode: '' },
  isRegister: false,
  resetPassword: false,
  isforgotPassword: false,
  isChangeEmailPhone: false,
  verifyCurrentAccount: false,
  verifyNewAccount: false,
  verifyAccount: false,
  authToken: authToken || undefined,
  adminAuthToken: adminAuthToken || undefined,
  authLoginFailed: false,
  error: undefined,
  featuredJobs: [],
  sessionExpired: undefined,
  t: loginTime || undefined,
  openSignInModal: false,
  isCaptchaLoading: false,
  captcha: undefined,
  showCaptcha: false,
  // resumeData: undefined,
  loginType: loginType || undefined,
  userSessions: [],
  userLogs: [],
  userDetails: [],
};

export default function appReducers(
  state: IAppInitialState = initialState,
  action: AppAction
) {
  switch (action.type) {
    // case AppActionType.RESET_VERIFY_ACCOUNT: {
    //   return {
    //     ...state,
    //     verifyAccount: false,
    //   };
    // }
    case AppActionType.SET_IP_CONFIG: {
      return {
        ...state,
        ipConfig: action.payload,
      };
    }
    case AppActionType.REGISTER_SUCCESS: {
      return {
        ...state,
        isRegister: true,
        isPageLoading: false,
      };
    }
    case AppActionType.OAUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        isRegister: true,
        isPageLoading: false,
      };
    }
    case AppActionType.LOGIN_SUCCESS: {
      isBrowser &&
        localStorage.setItem(Tokens.TALENTEZZY_AUTH_TOKEN, action.payload);
      const loginTime = String(moment().unix());
      isBrowser && localStorage.setItem('t', loginTime);
      return {
        ...state,
        isRegister: false,
        authToken: action.payload,
        sessionExpired: action.payload ? false : true,
        isPageLoading: false,
        t: loginTime,
        showCaptcha: false,
        captcha: undefined,
        openSignInModal: false,
      };
    }
    case AppActionType.LOGIN: {
      return {
        ...state,
        isPageLoading: true,
      };
    }
    case AppActionType.LOGIN_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
        error: action.payload.error,
        showCaptcha: action.payload.showCaptcha,
      };
    }
    case AppActionType.ADMIN_LOGIN_SUCCESS: {
      isBrowser &&
        localStorage.setItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN, action.payload);
      const loginTime = String(moment().unix());
      isBrowser && localStorage.setItem('t', loginTime);
      return {
        ...state,
        isRegister: false,
        adminAuthToken: action.payload,
        sessionExpired: action.payload ? false : true,
        isPageLoading: false,
        t: loginTime,
        showCaptcha: false,
        captcha: undefined,
        openSignInModal: false,
      };
    }
    case AppActionType.ADMIN_LOGIN_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
        error: action.payload.error,
        showCaptcha: action.payload.showCaptcha,
      };
    }
    case AppActionType.GET_CAPTCHA: {
      return {
        ...state,
        isCaptchaLoading: true,
      };
    }
    case AppActionType.GET_CAPTCHA_SUCCESS: {
      return {
        ...state,
        captcha: action.payload,
        isCaptchaLoading: false,
      };
    }
    case AppActionType.GET_CAPTCHA_FAILURE: {
      return {
        ...state,
        isCaptchaLoading: false,
      };
    }
    case AppActionType.GET_ADMIN_CAPTCHA: {
      return {
        ...state,
        isCaptchaLoading: true,
      };
    }
    case AppActionType.GET_ADMIN_CAPTCHA_SUCCESS: {
      return {
        ...state,
        captcha: action.payload,
        isCaptchaLoading: false,
      };
    }
    case AppActionType.GET_ADMIN_CAPTCHA_FAILURE: {
      return {
        ...state,
        isCaptchaLoading: false,
      };
    }
    case AppActionType.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        isforgotPassword: true,
      };
    }
    case AppActionType.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        resetPassword: true,
      };
    }
    case AppActionType.VERIFY_ACCOUNT: {
      return {
        ...state,
        isVerifyLoading: true,
        isPageLoading: true,
        verifyAccount: false,
      };
    }
    case AppActionType.VERIFY_ACCOUNT_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
        verifyAccount: true,
        verifyCurrentAccount: true,
        verifyNewAccount: state.verifyCurrentAccount ? true: false,
        isforgotPassword: false,
        isChangeEmailPhone: false,
      };
    }
    case AppActionType.GET_FEATURED_JOBS_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        featuredJobs: action.payload,
      };
    }
    case AppActionType.CHANGE_EMAIL_PHONE_OTP: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.CHANGE_EMAIL_PHONE_OTP_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
        verifyAccount: false,
        isChangeEmailPhone: true,
      };
    }
    case AppActionType.GET_USER_SESSION: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.GET_USER_SESSION_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        userSessions: action.payload,
      };
    }
    case AppActionType.GET_USER_SESSION_FILTERS: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.GET_USER_SESSION_FILTERS_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        userSessions: action.payload,
      };
    }
    case AppActionType.GET_USER_LOGS: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.GET_USER_LOGS_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        userLogs: action.payload,
      };
    }
    case AppActionType.GET_USER_LOGS_FILTERS: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.GET_USER_LOGS_FILTERS_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        userLogs: action.payload,
      };
    }
    case AppActionType.GET_USER_DETAILS: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.GET_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        userDetails: action.payload,
      };
    }
    case AppActionType.GET_USER_DETAILS_FILTERS: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.GET_USER_DETAILS_FILTERS_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        userDetails: action.payload,
      };
    }
    case AppActionType.GET_DELETE_USER_FILTERS: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.GET_DELETE_USER_FILTERS_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        userLogs: action.payload,
      };
    }
    case AppActionType.GET_PRE_LOGIN_LOGS_FILTERS: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.GET_PRE_LOGIN_LOGS_FILTERS_SUCCESS: {
      return {
        ...state,
        isPageLoading: false,
        userLogs: action.payload,
      };
    }
    case AppActionType.UPDATE_CONTACT: {
      return {
        ...state,
        isVerifyLoading: true,
      };
    }
    case AppActionType.UPDATE_CONTACT_SUCCESS: {
      isBrowser &&
        localStorage.setItem(Tokens.TALENTEZZY_AUTH_TOKEN, action.payload.token);
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
      };
    }
    case AppActionType.UPDATE_CONTACT_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.REGISTER:
    case AppActionType.OAUTH_REGISTER:
    case AppActionType.ADMIN_LOGIN:
    case AppActionType.RESET_PASSWORD:
    case AppActionType.FORGOT_PASSWORD:
    // case AppActionType.VERIFY_ACCOUNT:{
    //   return {
    //     ...state,
    //     isPageLoading: true,
    //   };
    // }
    case AppActionType.REGISTER_FAILURE:
    case AppActionType.OAUTH_REGISTER_FAILURE:
    case AppActionType.FORGOT_PASSWORD_FAILURE:
    case AppActionType.VERIFY_ACCOUNT_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.CHANGE_EMAIL_PHONE_OTP_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
        verifyAccount: false,
        error: action.payload,
      };
    }
    case AppActionType.GET_USER_SESSION_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.GET_USER_SESSION_FILTERS_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.GET_USER_LOGS_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.GET_USER_LOGS_FILTERS_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.GET_USER_DETAILS_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.GET_USER_DETAILS_FILTERS_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.GET_DELETE_USER_FILTERS_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.GET_PRE_LOGIN_LOGS_FILTERS_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        error: action.payload,
      };
    }
    case AppActionType.CANCEL_AUTH_MODAL: {
      return {
        ...state,
        isPageLoading: false,
        isRegister: false,
        resetPassword: false,
        verifyAccount: false,
      };
    }
    case AppActionType.AUTH_LOGIN_FAILED: {
      return {
        ...state,
        authLoginFailed: true,
      };
    }
    case AppActionType.SET_MSG: {
      return {
        ...state,
        error: action.payload,
        isPageLoading: false,
      };
    }
    case AppActionType.CLEAR_MSG: {
      return {
        ...state,
        error: undefined,
      };
    }
    case AppActionType.LOGOUT: {
      authToken = null;
      delete initialState.authToken;
      return {
        ...state,
        ...initialState,
        authToken: null,
        t: null,
      };
    }
    case AppActionType.CLEAR_APP: {
      authToken = null;
      delete initialState.authToken;
      return {
        ...state,
        ...initialState,
        authToken: null,
        t: null,
      };
    }
    case AppActionType.SESSION_EXPIRED: {
      return {
        ...state,
        sessionExpired: action.payload,
      };
    }
    case AppActionType.OPEN_SIGNIN_MODAL: {
      return {
        ...state,
        openSignInModal: !state.openSignInModal,
      };
    }
    case AppActionType.SET_LOGIN_TYPE: {
      return {
        ...state,
        loginType: action.payload,
      };
    }
    default:
      return state;
  }
}
