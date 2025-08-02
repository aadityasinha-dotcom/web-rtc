import { Tokens } from "shared/constants/url.constant";
import {
  FooterAction,
  FooterActionType,
} from "store/action-types/footer.types";
export interface FooterInitialState {
  isLoading: boolean;
  termsandConditions: string;
  privacyPolicy: string;
  cookiePolicy: string;
}

const initialState: FooterInitialState = {
  isLoading: false,
  termsandConditions: "",
  privacyPolicy: "",
  cookiePolicy: "",
};

export default function appReducers(
  state: FooterInitialState = initialState,
  action: FooterAction
) {
  switch (action.type) {
    case FooterActionType.TERMSCONDITIONS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FooterActionType.TERMSCONDITIONS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        termsandConditions: action.payload,
      };
    }
    case FooterActionType.TERMSCONDITIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case FooterActionType.PRIVACYPOLICY: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FooterActionType.PRIVACYPOLICY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        privacyPolicy: action.payload,
      };
    }
    case FooterActionType.PRIVACYPOLICY_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case FooterActionType.COOKIEPOLICY: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FooterActionType.COOKIEPOLICY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cookiePolicy: action.payload,
      };
    }
    case FooterActionType.COOKIEPOLICY_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
