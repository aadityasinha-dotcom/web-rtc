import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiUrl, Tokens } from 'shared/constants/url.constant';
import talentEzzyApi from './api';

export const updateProfileApi = (data: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.UPDATE_PROFILE,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const updateImageApi = (file: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  let image = new FormData();
  image.append('image', file);
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.post(`${ApiUrl.UPDATE_IMAGE}`, image, config);
};

export const deletePortfolioApi = (data: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.DELETE_PORTFOLIO,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const accountVerifiedApi = ({
  emailAddress,
  phoneNumber,
}: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.VERIFY_ACCOUNT,
    method: 'get',
    params: {
      emailAddress,
      phoneNumber,
    },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const changePasswordApi = (data: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.CHANGE_PASSWORD,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};
