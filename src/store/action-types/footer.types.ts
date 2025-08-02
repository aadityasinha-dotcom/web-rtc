export enum FooterActionType {
  TERMSCONDITIONS = "[Footer] Terms Conditions",
  TERMSCONDITIONS_SUCCESS = "[Footer] Terms Conditions Success",
  TERMSCONDITIONS_FAILURE = "[Footer] Terms Conditions Failure",

  PRIVACYPOLICY = "[Footer] Privacy Policy",
  PRIVACYPOLICY_SUCCESS = "[Footer] Privacy Policy Success",
  PRIVACYPOLICY_FAILURE = "[Footer] Privacy Policy Failure",

  COOKIEPOLICY = "[Footer] Cookie Policy",
  COOKIEPOLICY_SUCCESS = "[Footer] Cookie Policy Success",
  COOKIEPOLICY_FAILURE = "[Footer] Cookie Policy Failure",
}

export interface ITermsConditions {
  type: FooterActionType.TERMSCONDITIONS;
  payload: any;
}

export interface ITermsConditionsSuccess {
  type: FooterActionType.TERMSCONDITIONS_SUCCESS;
  payload: any;
}

export interface ITermsConditionsFailure {
  type: FooterActionType.TERMSCONDITIONS_FAILURE;
  payload: any;
}
export interface IPrivacyPolicy {
  type: FooterActionType.PRIVACYPOLICY;
  payload: any;
}

export interface IPrivacyPolicySuccess {
  type: FooterActionType.PRIVACYPOLICY_SUCCESS;
  payload: any;
}

export interface IPrivacyPolicyFailure {
  type: FooterActionType.PRIVACYPOLICY_FAILURE;
  payload: any;
}
export interface ICookiePolicy {
  type: FooterActionType.COOKIEPOLICY;
  payload: any;
}

export interface ICookiePolicySuccess {
  type: FooterActionType.COOKIEPOLICY_SUCCESS;
  payload: any;
}

export interface ICookiePolicyFailure {
  type: FooterActionType.COOKIEPOLICY_FAILURE;
  payload: any;
}
export type FooterAction =
  | ITermsConditions
  | ITermsConditionsSuccess
  | ITermsConditionsFailure
  | IPrivacyPolicy
  | IPrivacyPolicySuccess
  | IPrivacyPolicyFailure
  | ICookiePolicy
  | ICookiePolicySuccess
  | ICookiePolicyFailure;
