import { AxiosRequestConfig, AxiosResponse } from 'axios';
import talentEzzyApi from './api';
import { ApiUrl, Tokens } from 'shared/constants/url.constant';

export const getResumeDetailApi = (): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.RESUME_DETAILS,
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const updateResumeApi = (data: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.UPDATE_RESUME,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};