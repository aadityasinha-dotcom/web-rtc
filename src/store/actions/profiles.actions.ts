import { getProfileApi, getUserDashboardApi } from 'core/api/app.api';
import {
  accountVerifiedApi,
  deletePortfolioApi,
  updateImageApi,
  updateProfileApi,
  changePasswordApi,
} from 'core/api/profile.api';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppAction, AppActionType } from 'store/action-types/app.types';
import {
  ProfileAction,
  ProfileActionType,
} from 'store/action-types/profile.types';

export const updateProfile: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE,
  payload: undefined,
};

export const updateSuccess: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE_SUCCESS,
  payload: undefined,
};

export const updateFailure: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE_FAILURE,
  payload: undefined,
};

export const updatImage: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE,
  payload: undefined,
};

export const updatImageSuccess: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE_SUCCESS,
  payload: undefined,
};

export const updatImageFailure: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE_FAILURE,
  payload: undefined,
};

export const deleteportFolio: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE,
  payload: undefined,
};

export const deleteportFolioSuccess: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE_SUCCESS,
  payload: undefined,
};

export const deleteportFolioFailure: ProfileAction = {
  type: ProfileActionType.UPDATE_PROFILE_FAILURE,
  payload: undefined,
};

export const accountVerified: ProfileAction = {
  type: ProfileActionType.ACCOUNT_VERIFIED,
  payload: undefined,
};

export const accountVerifiedSuccess: ProfileAction = {
  type: ProfileActionType.ACCOUNT_VERIFIED_SUCCESS,
  payload: undefined,
};

export const accountVerifiedFailure: ProfileAction = {
  type: ProfileActionType.ACCOUNT_VERIFIED_FAILURE,
  payload: undefined,
};

export const profileClearMessage: ProfileAction = {
  type: ProfileActionType.CLEAR_MSG,
};

export const setMessageAction =
  (message: string): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction>): Promise<void> => {
    dispatch({
      type: ProfileActionType.SET_MSG,
      payload: message,
    });
  };

export const getUserDashboardAction =
  (): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction>): Promise<void> => {
    try {
      dispatch({ type: ProfileActionType.GET_USER_DASHBOARD, payload: undefined });
      const response: any = await getUserDashboardApi();
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: ProfileActionType.GET_USER_DASHBOARD_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: ProfileActionType.GET_USER_DASHBOARD_FAILURE,
        payload: error.message,
      });
    }
  };


export const getProfileAction =
  (): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction>): Promise<void> => {
    try {
      dispatch({ type: ProfileActionType.GET_PROFILE, payload: undefined });
      const response: any = await getProfileApi();
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: ProfileActionType.GET_PROFILE_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: ProfileActionType.GET_PROFILE_FAILURE,
        payload: error.message,
      });
    }
  };

export const updateProfileAction =
  (formData: any): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction | AppAction>): Promise<void> => {
    try {
      dispatch(updatImage);
      const response: any = await updateProfileApi(formData);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: ProfileActionType.UPDATE_PROFILE_SUCCESS,
          payload: undefined,
        });
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Profile Updated successfully',
        });
        const response: any = await getProfileApi();
        if (response.data.message === 'ERROR') {
          dispatch({
            type: AppActionType.SET_MSG,
            payload: response.data.message,
          });
          throw new Error(response.data.description);
        } else {
          dispatch({
            type: ProfileActionType.GET_PROFILE_SUCCESS,
            payload: response.data,
          });
        }
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: ProfileActionType.UPDATE_PROFILE_FAILURE,
        payload: error.message,
      });
      dispatch({ type: AppActionType.SET_MSG, payload: error.message });
    }
  };

export const updateImageAction =
  (image: any): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction | AppAction>): Promise<void> => {
    try {
      dispatch(updateProfile);
      const response: any = await updateImageApi(image);
      if (response.data.message === 'ERROR') {
        setMessageAction(response.data.description);
        dispatch({
          type: AppActionType.SET_MSG,
          payload: response.data.description,
        });
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: ProfileActionType.UPDATE_IMAGE_SUCCESS,
          payload: response.data.description,
        });
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Image uploaded successfully',
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: ProfileActionType.UPDATE_IMAGE_FAILURE,
        payload: error.message,
      });
      dispatch({ type: AppActionType.SET_MSG, payload: error.message });
    }
  };

export const deletePortFolioAction =
  (image: any): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction | AppAction>): Promise<void> => {
    try {
      dispatch(deleteportFolio);
      const response: any = await deletePortfolioApi(image);
      if (response.data.message === 'ERROR') {
        setMessageAction(response.data.description);
        dispatch({
          type: AppActionType.SET_MSG,
          payload: response.data.description,
        });
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: ProfileActionType.DELETE_PORTFOLIO_SUCCESS,
          payload: response.data.description,
        });
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Profile deleted successfully',
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: ProfileActionType.DELETE_PORTFOLIO_FAILURE,
        payload: error.message,
      });
      dispatch({ type: AppActionType.SET_MSG, payload: error.message });
    }
  };

export const accountVerifiedAction =
  ({
    emailAddress,
    phoneNumber,
  }: any): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction | AppAction>): Promise<void> => {
    try {
      dispatch(accountVerified);
      const response: any = await accountVerifiedApi({
        emailAddress,
        phoneNumber,
      });
      if (response.data.message === 'ERROR') {
        setMessageAction(response.data.description);
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: ProfileActionType.ACCOUNT_VERIFIED_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: ProfileActionType.ACCOUNT_VERIFIED_FAILURE,
        payload: error.message,
      });
    }
  };

export const changePasswordAction =
  (data: any): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction | AppAction>): Promise<void> => {
    try {
      dispatch({
        type: ProfileActionType.CHANGE_PASSWORD,
        payload: undefined,
      });
      const response: any = await changePasswordApi(data);
      if (response.data.message === 'ERROR') {
        dispatch({
          type: AppActionType.SET_MSG,
          payload: response.data.description,
        });
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Password changed successfully!',
        });
        dispatch({
          type: ProfileActionType.CHANGE_PASSWORD_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      setMessageAction(error);
      dispatch({
        type: ProfileActionType.CHANGE_PASSWORD_FAILURE,
        payload: error.message,
      });
    }
  };

export const clearProfileAction =
  (): ThunkAction<Promise<void>, null, null, ProfileAction> =>
  async (dispatch: Dispatch<ProfileAction>): Promise<void> => {
    dispatch({ type: ProfileActionType.CLEAR_PROFILE });
  };
