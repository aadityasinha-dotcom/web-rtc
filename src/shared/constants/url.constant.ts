const baseURL: string =
  process.env.NODE_ENV === 'development'
    ? 'http://34.117.150.179'
    : 'http://34.117.150.179';

const redirectUri: string =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/oauth/redirect'
    : 'https://test-latest-development.d1tq470tfm0qea.amplifyapp.com/oauth/redirect';

// redirectUri: "http://localhost:3000/oauth2/redirect",
// apiBaseUrl: "http://localhost:8080"

export enum ApiUrl {
  REGISTER = 'register',
  OAUTH_REGISTER = 'oauth-register', // username and phoneNumber
  LOGIN = 'login',
  ADMIN_LOGIN = 'admin/login',
  ADMIN_OTP = 'admin/admin-otp',
  LOGOUT = 'logout1',
  USER_DASHBOARD = 'user-dashboard',
  PROFILE = 'profile',
  UPLOAD_RESUME = 'upload-resume',
  USER_SESSION_DATA = 'admin/user-session-data',
  USER_SESSION_FILTERS_DATA = 'admin/session-filter',
  USER_LOGS_FILTERS_DATA = 'admin/logs-filter',
  USER_DETAILS_FILTERS_DATA = 'admin/registereduser-filter',
  DELETE_USER_FILTERS_DATA = 'admin/deleted-user-logs-filter',
  PRE_LOGIN_LOGS_FILTERS_DATA = 'admin/pre-login-log-filter',
  USER_LOGS_DATA = 'admin/user-logs-data',
  USER_DETAILS_DATA = 'admin/users-data',
  SAVE_RESUME = 'save-resume',
  FORGOT_PASSWORD = 'forgot-password-otp',
  RESET_PASSWORD = 'reset-password',
  CHANGE_PASSWORD = 'change-password',
  UPDATE_IMAGE = 'update-image',
  UPDATE_PROFILE = 'update-profile',
  DELETE_PROFILE = 'delete-profile',
  DELETE_PORTFOLIO = 'delete-social-profile',
  AUTHENTICATE = 'authenticate',
  AUTHENTICATE_OTP = '/authenticate-otp',
  CHANGE_EMAIL_PHONE_OTP = 'change-email-phone-otp',
  UPDATE_CONTACT = 'update-contact',
  SINGLE_JOB_MATCH_RATE= '/match-user-with-single-job',
  FEATURED_JOBS = 'featured-jobs',
  SAVED_JOBS = 'user/saved-jobs',
  SAVED_JOBS_IDS = 'saved-jobs/users-ids',
  REMOVE_SAVED_JOBS = 'remove/saved-jobs',
  LIKE_SAVED_JOBS = 'saved-jobs',
  FILTER_BY_LOCATION_OR_TITLE = 'filterBy',
  JOBS = 'search-job',
  CAPTCHA = 'captcha',
  ADMIN_CAPTCHA = 'admin/captcha',
  VERIFY_ACCOUNT = 'verify-account',
  ADMIN_VERIFY_ACCOUNT = 'admin/authenticate',
  JOB_SEARCH_FILTER = 'sidebar',
  ADMIN_SEARCH_FILTER_V1 = 'admin/v1/sidebar',
  ADMIN_SEARCH_FILTER_V2 = 'admin/v2/sidebar',
  ADMIN_SEARCH_FILTER_V3 = 'admin/v3/sidebar',
  ADMIN_SEARCH_FILTER_V4 = 'admin/v4/sidebar',
  ADMIN_SEARCH_FILTER_V5 = 'admin/v5/sidebar',
  TERMS_CONDITIONS = 'terms-conditions',
  PRIVACY_POLICY = 'privacy-policy',
  COOKIE_POLICY = 'cookie-policy',
  GET_SKILL_LIST = 'test-topics',
  GET_SKILL_QUESTIONS = 'start-test',
  SELECT_ASSESSMENT_ANSWER = 'answer',
  SUBMIT_ASSESSMENT = 'submit',
  GET_SELECTED_ANSWER = 'preview',
  RESUME_DETAILS = 'resume-details',
  UPDATE_RESUME = 'update-resume',
  // DELETE_RESUME_PROJECT = 'delete-project',
  // DELETE_RESUME_EMPLOYMENT = 'delete-employment',
  // DELETE_RESUME_EDUCATION = 'delete-education',
  // DELETE_RESUME_CERTIFICATION = 'delete-certification',
}

export enum Tokens {
  ACCESS_TOKEN = 'accessToken',
  TALENTEZZY_AUTH_TOKEN = 'TALENTEZZY_AUTH_TOKEN',
  TALENTEZZY_ADMIN_AUTH_TOKEN = 'TALENTEZZY_ADMIN_AUTH_TOKEN',
  LOGIN_TYPE = 'LOGIN_TYPE',
  ASSESSMENT_TITLE = 'ASSESSMENT_TITLE',
}

export enum LOGIN_TYPE {
  GENERAL = 'GENERAL',
  SOCIAL = 'SOCIAL',
}

export const GOOGLE_AUTH_URL =
  baseURL + 'oauth2/authorize/google?redirect_uri=' + redirectUri;
export const FACEBOOK_AUTH_URL =
  baseURL + 'oauth2/authorize/facebook?redirect_uri=' + redirectUri;
export const GITHUB_AUTH_URL =
  baseURL + 'oauth2/authorize/github?redirect_uri=' + redirectUri;
export const LINKEDIN_AUTH_URL =
  baseURL + 'oauth2/authorize/linkedin?redirect_uri=' + redirectUri;
