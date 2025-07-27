import { AuthAction, AuthState } from '../actions/auth.actions';
import { AuthActionType } from '../action-types';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
    case AuthActionType.REGISTER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AuthActionType.LOGIN_SUCCESS:
    case AuthActionType.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null,
      };

    case AuthActionType.LOGIN_FAILURE:
    case AuthActionType.REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };

    case AuthActionType.LOGOUT:
      return {
        ...initialState,
      };

    case AuthActionType.REFRESH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

