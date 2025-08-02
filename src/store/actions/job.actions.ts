import {
  getJobsListApi,
  getSingleJobMatchRateApi,
  getJobSearchFilterApi,
  getAdvancedJobSearchFilterApi,
  getAdminFilterV1Api,
  getAdminFilterV2Api,
  getAdminFilterV3Api,
  getAdminFilterV4Api,
  getAdminFilterV5Api,
  getDefaultJobsListApi,
  getSavedJobsListApi,
  getSavedJobsListIdsApi,
  likeSavedJobsApi,
  removeSavedJobsApi,
} from 'core/api/job.api';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { JobAction, JobActionType } from 'store/action-types/job.types';
import { AppAction, AppActionType } from 'store/action-types/app.types';

export const getJobSearchFilter: JobAction = {
  type: JobActionType.GET_JOB_SEARCH_FILTER,
  payload: undefined,
};

export const getJobSearchFilterSuccess: JobAction = {
  type: JobActionType.GET_JOB_SEARCH_FILTER_SUCCESS,
  payload: undefined,
};

export const getJobSearchFilterError: JobAction = {
  type: JobActionType.GET_JOB_SEARCH_FILTER_FAILURE,
  payload: undefined,
};

export const getJobList: JobAction = {
  type: JobActionType.GET_JOB_LIST,
  payload: undefined,
};

export const getJobListSuccess: JobAction = {
  type: JobActionType.GET_JOB_LIST_SUCCESS,
  payload: undefined,
};

export const getJobListError: JobAction = {
  type: JobActionType.GET_JOB_LIST_FAILURE,
  payload: undefined,
};

export const clearMatchRate: JobAction = {
  type: JobActionType.CLEAR_MATCH_RATE,
};

export const getSingleJobMatchRate: JobAction = {
  type: JobActionType.GET_SINGLE_JOB_MATCH_RATE,
  payload: undefined,
};

export const getSingleJobMatchRateSuccess: JobAction = {
  type: JobActionType.GET_SINGLE_JOB_MATCH_RATE_SUCCESS,
  payload: undefined,
};

export const getSinlgeJobMatchRateError: JobAction = {
  type: JobActionType.GET_SINGLE_JOB_MATCH_RATE_FAILURE,
  payload: undefined,
};

export const getSavedJobList: JobAction = {
  type: JobActionType.GET_SAVED_JOB_LIST,
  payload: undefined,
};

export const getSavedJobListSuccess: JobAction = {
  type: JobActionType.GET_SAVED_JOB_LIST_SUCCESS,
  payload: undefined,
};

export const getSavedJobListError: JobAction = {
  type: JobActionType.GET_SAVED_JOB_LIST_FAILURE,
  payload: undefined,
};

export const getSavedJobListIds: JobAction = {
  type: JobActionType.GET_SAVED_JOB_LIST_IDS,
  payload: undefined,
};

export const getSavedJobListIdsSuccess: JobAction = {
  type: JobActionType.GET_SAVED_JOB_LIST_IDS_SUCCESS,
  payload: undefined,
};

export const getSavedJobListIdsError: JobAction = {
  type: JobActionType.GET_SAVED_JOB_LIST_IDS_FAILURE,
  payload: undefined,
};

export const likeSavedJobList: JobAction = {
  type: JobActionType.LIKE_SAVED_JOB_LIST,
  payload: undefined,
};

export const likeSavedJobListSuccess: JobAction = {
  type: JobActionType.LIKE_SAVED_JOB_LIST_SUCCESS,
  payload: undefined,
};

export const likeSavedJobListError: JobAction = {
  type: JobActionType.LIKE_SAVED_JOB_LIST_FAILURE,
  payload: undefined,
};

export const removeSavedJobList: JobAction = {
  type: JobActionType.REMOVE_SAVED_JOB_LIST,
  payload: undefined,
};

export const removeSavedJobListSuccess: JobAction = {
  type: JobActionType.REMOVE_SAVED_JOB_LIST_SUCCESS,
  payload: undefined,
};

export const removeSavedJobListError: JobAction = {
  type: JobActionType.REMOVE_SAVED_JOB_LIST_FAILURE,
  payload: undefined,
};

export const getAdvancedJobFilters: JobAction = {
  type: JobActionType.GET_ADVANCED_JOB_FILTERS,
  payload: undefined,
};

export const getAdvancedJobFiltersSuccess: JobAction = {
  type: JobActionType.GET_ADVANCED_JOB_FILTERS_SUCCESS,
  payload: undefined,
};

export const getAdvancedJobFiltersError: JobAction = {
  type: JobActionType.GET_ADVANCED_JOB_FILTERS_FAILURE,
  payload: undefined,
};

export const getAdminFiltersV1: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V1,
  payload: undefined,
};

export const getAdminFiltersV1Success: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V1_SUCCESS,
  payload: undefined,
};

export const getAdminFiltersV1Error: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V1_FAILURE,
  payload: undefined,
};

export const getAdminFiltersV2: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V2,
  payload: undefined,
};

export const getAdminFiltersV2Success: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V2_SUCCESS,
  payload: undefined,
};

export const getAdminFiltersV2Error: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V2_FAILURE,
  payload: undefined,
};

export const getAdminFiltersV3: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V3,
  payload: undefined,
};

export const getAdminFiltersV3Success: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V3_SUCCESS,
  payload: undefined,
};

export const getAdminFiltersV3Error: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V3_FAILURE,
  payload: undefined,
};

export const getAdminFilters4: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V4,
  payload: undefined,
};

export const getAdminFiltersV4Success: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V4_SUCCESS,
  payload: undefined,
};

export const getAdminFiltersV4Error: JobAction = {
  type: JobActionType.GET_ADMIN_FILTERS_V4_FAILURE,
  payload: undefined,
};

export const getJobSearchFilterAction =
  (payload: any): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_JOB_SEARCH_FILTER,
        payload: undefined,
      });
      const response: any = await getJobSearchFilterApi(payload);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_JOB_SEARCH_FILTER_SUCCESS,
          payload: response.data,
        });
        let jobTag: string = payload.jobTitle;
        delete payload.jobTitle;
        dispatch({
          type: JobActionType.GET_JOB_LABELS,
          payload: {
            ...payload,
            jobTag,
          },
        });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_JOB_SEARCH_FILTER_FAILURE,
        payload: error.message,
      });
    }
  };

export const getJobListAction =
  (
    payload: any,
    page: number,
    pageSize: number
  ): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_JOB_LIST,
        payload: undefined,
      });
      const response: any = await getJobsListApi(payload, page, pageSize);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_JOB_LIST_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_JOB_LIST_FAILURE,
        payload: error.message,
      });
    }
  };

export const getSingleJobMatchRateAction =
  (
    payload: any,
    jobId: number,
  ): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction | AppAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_SINGLE_JOB_MATCH_RATE,
        payload: undefined,
      });
      const response: any = await getSingleJobMatchRateApi(
        payload,
        jobId,
      );
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_SINGLE_JOB_MATCH_RATE_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        let errorMessage = error.response.data?.message || 'Match Rate Limit exceeded';
        if (errorMessage.includes('Try again after:')) {
          try {
            // Extract the date string from the message
            const dateTimeMatch = errorMessage.match(/Try again after: (.+)$/);
            
            if (dateTimeMatch && dateTimeMatch[1]) {
              const utcDateStr = dateTimeMatch[1];
              
              // Create a new date object from the UTC string
              const utcDate = new Date(utcDateStr);
              
              if (!isNaN(utcDate.getTime())) {
                // Add 5 hours and 30 minutes to convert to IST
                const istDate = new Date(utcDate.getTime() + (5 * 60 + 30) * 60 * 1000);
                
                // Format the IST date
                const options: Intl.DateTimeFormatOptions = {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                };
                
                const istDateStr = istDate.toLocaleString('en-US', options);
                
                // Replace the UTC date with IST date in the message
                errorMessage = errorMessage.replace(dateTimeMatch[1], `${istDateStr} IST`);
              }
            }
          } catch (e) {
            console.error('Error converting time to IST:', e);
            // If there's any error in conversion, use the original message
          }
        }
        dispatch({
          type: AppActionType.SET_MSG,
          payload: errorMessage,
        });
      }
      dispatch({
        type: JobActionType.GET_SINGLE_JOB_MATCH_RATE_FAILURE,
        payload: error.message,
      });
    }
  };

export const getDefaultJobListAction =
  (
    payload: any,
    page: number,
    pageSize: number
  ): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_DEFAULT_JOB_LIST,
        payload: undefined,
      });
      const response: any = await getDefaultJobsListApi(
        payload,
        page,
        pageSize
      );
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_JOB_LIST_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_JOB_LIST_FAILURE,
        payload: error.message,
      });
    }
  };

export const getSavedJobListAction = (): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_SAVED_JOB_LIST,
        payload: undefined,
      });
      const response: any = await getSavedJobsListApi();
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_SAVED_JOB_LIST_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_SAVED_JOB_LIST_FAILURE,
        payload: error.message,
      });
    }
  };

export const getSavedJobListIdsAction = (): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_SAVED_JOB_LIST_IDS,
        payload: undefined,
      });
      const response: any = await getSavedJobsListIdsApi();
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_SAVED_JOB_LIST_IDS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_SAVED_JOB_LIST_IDS_FAILURE,
        payload: error.message,
      });
    }
  };

export const likeSavedJobAction = (
  id: number
): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction | AppAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_SAVED_JOB_LIST,
        payload: undefined,
      });
      const response: any = await likeSavedJobsApi(id);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: AppActionType.SET_MSG,
          payload: 'Job has been saved',
        });
        dispatch({
          type: JobActionType.LIKE_SAVED_JOB_LIST_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.LIKE_SAVED_JOB_LIST_FAILURE,
        payload: error.message,
      });
    }
  };

export const removeSavedJobListAction = (
  id: number
): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.REMOVE_SAVED_JOB_LIST,
        payload: undefined,
      });
      const response: any = await removeSavedJobsApi(id);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.REMOVE_SAVED_JOB_LIST_SUCCESS,
          payload: id,
        });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.REMOVE_SAVED_JOB_LIST_FAILURE,
        payload: error.message,
      });
    }
  };

export const getAdvancedJobSearchFilterAction =
  (payload: any): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_ADVANCED_JOB_FILTERS,
        payload: undefined,
      });
      const response: any = await getAdvancedJobSearchFilterApi(payload);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_ADVANCED_JOB_FILTERS_SUCCESS,
          payload: response.data,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_ADVANCED_JOB_FILTERS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getAdminFilterV1Action =
  (payload: any): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V1,
        payload: undefined,
      });
      const response: any = await getAdminFilterV1Api(payload);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_ADMIN_FILTERS_V1_SUCCESS,
          payload: response.data,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V1_FAILURE,
        payload: error.message,
      });
    }
  };

export const getAdminFilterV2Action =
  (payload: any): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V2,
        payload: undefined,
      });
      const response: any = await getAdminFilterV2Api(payload);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_ADMIN_FILTERS_V2_SUCCESS,
          payload: response.data,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V2_FAILURE,
        payload: error.message,
      });
    }
  };

export const getAdminFilterV3Action =
  (payload: any): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V3,
        payload: undefined,
      });
      const response: any = await getAdminFilterV3Api(payload);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_ADMIN_FILTERS_V3_SUCCESS,
          payload: response.data,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V3_FAILURE,
        payload: error.message,
      });
    }
  };

export const getAdminFilterV4Action =
  (payload: any): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V4,
        payload: undefined,
      });
      const response: any = await getAdminFilterV4Api(payload);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_ADMIN_FILTERS_V4_SUCCESS,
          payload: response.data,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V4_FAILURE,
        payload: error.message,
      });
    }
  };

export const getAdminFilterV5Action =
  (payload: any): ThunkAction<Promise<void>, null, null, JobAction> =>
  async (dispatch: Dispatch<JobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V5,
        payload: undefined,
      });
      const response: any = await getAdminFilterV5Api(payload);
      if (response.data.message === 'ERROR') {
        throw new Error(response.data.description);
      } else {
        dispatch({
          type: JobActionType.GET_ADMIN_FILTERS_V5_SUCCESS,
          payload: response.data,
        });
        // dispatch({
        //   type: JobActionType.GET_JOB_LABELS,
        //   payload: payload,
        // });
      }
    } catch (error: any) {
      // setMessageAction(error);
      dispatch({
        type: JobActionType.GET_ADMIN_FILTERS_V5_FAILURE,
        payload: error.message,
      });
    }
  };
