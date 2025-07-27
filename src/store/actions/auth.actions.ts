import { AuthActionType } from '../action-types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Action Interfaces
export interface ILogin {
  type: AuthActionType.LOGIN;
  payload: LoginCredentials;
}

export interface ILoginSuccess {
  type: AuthActionType.LOGIN_SUCCESS;
  payload: { user: User; token: string };
}

export interface ILoginFailure {
  type: AuthActionType.LOGIN_FAILURE;
  payload: string;
}

export interface ILogout {
  type: AuthActionType.LOGOUT;
}

export interface IRegister {
  type: AuthActionType.REGISTER;
  payload: RegisterData;
}

export interface IRegisterSuccess {
  type: AuthActionType.REGISTER_SUCCESS;
  payload: { user: User; token: string };
}

export interface IRegisterFailure {
  type: AuthActionType.REGISTER_FAILURE;
  payload: string;
}

export interface IRefreshToken {
  type: AuthActionType.REFRESH_TOKEN;
  payload: string;
}

export type AuthAction =
  | ILogin
  | ILoginSuccess
  | ILoginFailure
  | ILogout
  | IRegister
  | IRegisterSuccess
  | IRegisterFailure
  | IRefreshToken;

