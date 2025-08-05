import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiUrl, Tokens } from '../../shared/constants/url.constant';
import talentEzzyApi from './api';

export const registerApi = (data: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.REGISTER,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const oauthRegisterApi = (data: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.OAUTH_REGISTER,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};


export const loginApi = (data: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.LOGIN,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const adminLoginApi = (data: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.ADMIN_LOGIN,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const logoutApi = (data: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.LOGOUT,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const getUserDashboardApi = (): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.USER_DASHBOARD,
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getProfileApi = (): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.PROFILE,
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getUserSessionApi = (data: any): Promise<AxiosResponse<any>> => {
  const { page, size } = data;
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.USER_SESSION_DATA}?page=${page}&size=${size}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  }
  return talentEzzyApi.request(config);
}

export const getUserSessionFiltersApi = (
  data: any,
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  console.log(data, page, pageSize);
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.USER_SESSION_FILTERS_DATA}?page=${page}&pageSize=${pageSize}`,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  }
  return talentEzzyApi.request(config);
}

export const getUserLogsApi = (data: any): Promise<AxiosResponse<any>> => {
  const { page, size } = data;
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.USER_LOGS_DATA}?page=${page}&size=${size}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  return talentEzzyApi.request(config);
}

export const getUserLogsFiltersApi = (
  data: any,
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  console.log(data, page, pageSize);
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.USER_LOGS_FILTERS_DATA}?page=${page}&pageSize=${pageSize}`,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  }
  return talentEzzyApi.request(config);
}

export const getUserDetailsApi = (data: any): Promise<AxiosResponse<any>> => {
  const { page, size } = data;
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.USER_DETAILS_DATA}?page=${page}&size=${size}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  return talentEzzyApi.request(config);
}

export const getUserDetailsFiltersApi = (
  data: any,
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  console.log(data, page, pageSize);
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.USER_DETAILS_FILTERS_DATA}?page=${page}&pageSize=${pageSize}`,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  }
  return talentEzzyApi.request(config);
}

export const getDeleteUserFiltersApi = (
  data: any,
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  console.log(data, page, pageSize);
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.DELETE_USER_FILTERS_DATA}?page=${page}&pageSize=${pageSize}`,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  }
  return talentEzzyApi.request(config);
}

export const getPreLoginLogsFiltersApi = (
  data: any,
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  console.log(data, page, pageSize);
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.PRE_LOGIN_LOGS_FILTERS_DATA}?page=${page}&pageSize=${pageSize}`,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  }
  return talentEzzyApi.request(config);
}


export const forgotPasswordApi = (data: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.FORGOT_PASSWORD,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const resetPasswordApi = (data: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.RESET_PASSWORD,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const verifyAccountApi = (data: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.AUTHENTICATE,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const verifyAuthenticateAccountApi = (data: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.AUTHENTICATE_OTP,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const changeEmailPhoneOtpApi = (data: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.CHANGE_EMAIL_PHONE_OTP,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const updateContactApi = (data: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.UPDATE_CONTACT,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};


export const uploadResumeApi = (file: any): Promise<AxiosResponse<any>> => {
  let formData = new FormData();
  formData.append('file', file);
  const headers: AxiosRequestConfig['headers'] = {
    'Content-Type': 'multipart/form-data',
  };
  // Check if authToken exists, then add it to the headers
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }
  const config: AxiosRequestConfig = {
    headers,
  };
  return talentEzzyApi.post(ApiUrl.UPLOAD_RESUME, formData, config);
};

export const saveResumeApi = (text: any): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'plain/text',
    },
  };
  return talentEzzyApi.post(ApiUrl.SAVE_RESUME, text, config);
};

export const deleteProfileApi = (): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.DELETE_PROFILE,
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getFeaturedJobsApi = (data: any): Promise<AxiosResponse<any>> => {
  const { page, pageSize } = data;
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.FEATURED_JOBS}?page=${page}&pageSize=${pageSize}`,
    method: 'get',
  };
  return talentEzzyApi.request(config);
};

export const getCaptchaApi = (emailAddress: string): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.CAPTCHA}?emailAddress=${emailAddress}`,
    method: 'get',
  };
  return talentEzzyApi.request(config);
};

export const getAdminCaptchaApi = (emailAddress: string): Promise<AxiosResponse<any>> => {
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.ADMIN_CAPTCHA}?emailAddress=${emailAddress}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  };
  return talentEzzyApi.request(config);
};
