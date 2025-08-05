import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiUrl, Tokens } from 'shared/constants/url.constant';
import talentEzzyApi from './api';

export const getJobSearchFilterApi = (
  data: any
): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: ApiUrl.FILTER_BY_LOCATION_OR_TITLE,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const getJobsListApi = (
  data: any,
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.JOBS}?page=${page}&pageSize=${pageSize}`,
    method: 'post',
    data,
  };
  return talentEzzyApi.request(config);
};

export const getDefaultJobsListApi = (
  data: any,
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.FEATURED_JOBS}?page=${page}&pageSize=${pageSize}`,
    method: 'get',
    data,
  };
  return talentEzzyApi.request(config);
};

export const getSingleJobMatchRateApi = (
  data: any,
  jobId: number,
): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.SINGLE_JOB_MATCH_RATE}?jobId=${jobId}`,
    method: 'get',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getSavedJobsListApi = (): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.SAVED_JOBS,
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getSavedJobsListIdsApi = (): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.SAVED_JOBS_IDS,
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const likeSavedJobsApi = (
  id: number
): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.LIKE_SAVED_JOBS}?jobId=${id}`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const removeSavedJobsApi = (
  id: number
): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.REMOVE_SAVED_JOBS}?jobId=${id}`,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getAdvancedJobSearchFilterApi = (
  data: any
): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.JOB_SEARCH_FILTER,
    method: 'get',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getAdminFilterV1Api = (
  data: any
): Promise<AxiosResponse<any>> => {
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.ADMIN_SEARCH_FILTER_V1,
    method: 'get',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getAdminFilterV2Api = (
  data: any
): Promise<AxiosResponse<any>> => {
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.ADMIN_SEARCH_FILTER_V2,
    method: 'get',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getAdminFilterV3Api = (
  data: any
): Promise<AxiosResponse<any>> => {
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.ADMIN_SEARCH_FILTER_V3,
    method: 'get',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getAdminFilterV4Api = (
  data: any
): Promise<AxiosResponse<any>> => {
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.ADMIN_SEARCH_FILTER_V4,
    method: 'get',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getAdminFilterV5Api = (
  data: any
): Promise<AxiosResponse<any>> => {
  const adminAuthToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_ADMIN_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.ADMIN_SEARCH_FILTER_V5,
    method: 'get',
    data,
    headers: {
      Authorization: `Bearer ${adminAuthToken}`,
    },
  };
  return talentEzzyApi.request(config);
};
