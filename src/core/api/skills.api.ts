import { AxiosRequestConfig, AxiosResponse } from 'axios';
import talentEzzyApi from './api';
import { ApiUrl, Tokens } from 'shared/constants/url.constant';

export const getSkillsListApi = (topic: any): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.GET_SKILL_LIST,
    method: 'get',
    params: { topic },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getAssessmentQuestionsApi = (
  skill: any
): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.GET_SKILL_QUESTIONS,
    method: 'get',
    params: {
      topic: skill,
    },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const selectSkillAnswerApi = (
  data: any
): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.SELECT_ASSESSMENT_ANSWER,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const getSelectedAnswerApi = (
  topic: any
): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.GET_SELECTED_ANSWER,
    method: 'get',
    params: { topic },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};

export const submitAssessmentApi = (
  skill: string
): Promise<AxiosResponse<any>> => {
  const authToken =
    typeof window !== 'undefined' &&
    localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  const config: AxiosRequestConfig = {
    url: ApiUrl.SUBMIT_ASSESSMENT,
    method: 'post',
    data: {
      topic: skill,
    },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return talentEzzyApi.request(config);
};
