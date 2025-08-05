import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiUrl } from "shared/constants/url.constant";
import talentEzzyApi from "./api";

export const getTermsConditions = (): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.TERMS_CONDITIONS}`,
    method: "get",
  };
  return talentEzzyApi.request(config);
};
export const getPrivacyPolicy = (): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.PRIVACY_POLICY}`,
    method: "get",
  };
  return talentEzzyApi.request(config);
};
export const getCookiePolicy = (): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${ApiUrl.COOKIE_POLICY}`,
    method: "get",
  };
  return talentEzzyApi.request(config);
};
