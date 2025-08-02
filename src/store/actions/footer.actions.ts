import {
  getTermsConditions,
  getPrivacyPolicy,
  getCookiePolicy,
} from "core/api/footer.api";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppAction, AppActionType } from "store/action-types/app.types";
import {
  FooterActionType,
  FooterAction,
} from "store/action-types/footer.types";
import { setMessageAction } from "./app.actions";

export const termsConditions: FooterAction = {
  type: FooterActionType.TERMSCONDITIONS,
  payload: undefined,
};

export const termsConditionsSuccess: FooterAction = {
  type: FooterActionType.TERMSCONDITIONS_SUCCESS,
  payload: undefined,
};

export const termsConditionsFailure: FooterAction = {
  type: FooterActionType.TERMSCONDITIONS_FAILURE,
  payload: undefined,
};
export const privacyPolicy: FooterAction = {
  type: FooterActionType.PRIVACYPOLICY,
  payload: undefined,
};

export const privacyPolicySuccess: FooterAction = {
  type: FooterActionType.PRIVACYPOLICY_SUCCESS,
  payload: undefined,
};

export const privacyPolicyFailure: FooterAction = {
  type: FooterActionType.PRIVACYPOLICY_FAILURE,
  payload: undefined,
};
export const cookiePolicy: FooterAction = {
  type: FooterActionType.COOKIEPOLICY,
  payload: undefined,
};

export const cookiePolicySuccess: FooterAction = {
  type: FooterActionType.COOKIEPOLICY_SUCCESS,
  payload: undefined,
};

export const cookiePolicyFailure: FooterAction = {
  type: FooterActionType.COOKIEPOLICY_FAILURE,
  payload: undefined,
};

export const getTermsAndConditions =
  (): ThunkAction<Promise<void>, null, null, FooterAction> =>
  async (dispatch: Dispatch<FooterAction>): Promise<void> => {
    try {
      dispatch({ type: FooterActionType.TERMSCONDITIONS, payload: undefined });
      const response: any = await getTermsConditions();
      if (response.data.message === "ERROR") {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: FooterActionType.TERMSCONDITIONS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: FooterActionType.TERMSCONDITIONS_FAILURE,
        payload: error.message,
      });
    }
  };
export const getPrivacyPolicies =
  (): ThunkAction<Promise<void>, null, null, FooterAction> =>
  async (dispatch: Dispatch<FooterAction>): Promise<void> => {
    try {
      dispatch({ type: FooterActionType.PRIVACYPOLICY, payload: undefined });
      const response: any = await getPrivacyPolicy();
      if (response.data.message === "ERROR") {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: FooterActionType.PRIVACYPOLICY_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: FooterActionType.PRIVACYPOLICY_FAILURE,
        payload: error.message,
      });
    }
  };
export const getCookiePolicies =
  (): ThunkAction<Promise<void>, null, null, FooterAction> =>
  async (dispatch: Dispatch<FooterAction>): Promise<void> => {
    try {
      dispatch({ type: FooterActionType.COOKIEPOLICY, payload: undefined });
      const response: any = await getCookiePolicy();
      if (response.data.message === "ERROR") {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: FooterActionType.COOKIEPOLICY_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: FooterActionType.COOKIEPOLICY_FAILURE,
        payload: error.message,
      });
    }
  };
