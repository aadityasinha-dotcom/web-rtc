export enum JobActionType {
  GET_JOB_SEARCH_FILTER = '[Job] Get Job Search Filter',
  GET_JOB_SEARCH_FILTER_SUCCESS = '[Job] Get Job Search Filter Success',
  GET_JOB_SEARCH_FILTER_FAILURE = '[Job] Get Job Search Filter Failure',

  GET_DEFAULT_JOB_LIST = '[Job] Get Default Job List',
  GET_DEFAULT_JOB_LIST_SUCCESS = '[Job] Get Default Job List Success',
  GET_DEFAULT_JOB_LIST_FAILURE = '[Job] Get Default Job List Failure',

  GET_JOB_LIST = '[Job] Get Job List',
  GET_JOB_LIST_SUCCESS = '[Job] Get Job List Success',
  GET_JOB_LIST_FAILURE = '[Job] Get Job List Failure',

  GET_SINGLE_JOB_MATCH_RATE = '[Job] Get Single Job Match Rate',
  GET_SINGLE_JOB_MATCH_RATE_SUCCESS = '[Job] Get Single Job Match Rate Success',
  GET_SINGLE_JOB_MATCH_RATE_FAILURE = '[Job] Get Single Job Match Rate Failure',

  GET_SAVED_JOB_LIST = '[Job] Get Saved Job List',
  GET_SAVED_JOB_LIST_SUCCESS = '[Job] Get Saved Job List Success',
  GET_SAVED_JOB_LIST_FAILURE = '[Job] Get Saved Job List Failure',

  GET_SAVED_JOB_LIST_IDS = '[Job] Get Saved Job List Ids',
  GET_SAVED_JOB_LIST_IDS_SUCCESS = '[Job] Get Saved Job List Ids Success',
  GET_SAVED_JOB_LIST_IDS_FAILURE = '[Job] Get Saved Job List Ids Failure',

  LIKE_SAVED_JOB_LIST = '[Job] Like Saved Job List',
  LIKE_SAVED_JOB_LIST_SUCCESS = '[Job] Like Saved Job List Success',
  LIKE_SAVED_JOB_LIST_FAILURE = '[Job] Like Saved Job List Failure',

  REMOVE_SAVED_JOB_LIST = '[Job] REMOVE Saved Job List',
  REMOVE_SAVED_JOB_LIST_SUCCESS = '[Job] Remove Saved Job List Success',
  REMOVE_SAVED_JOB_LIST_FAILURE = '[Job] Remove Saved Job List Failure',

  GET_ADVANCED_JOB_FILTERS = '[Job] Get Advanced Job Filters',
  GET_ADVANCED_JOB_FILTERS_SUCCESS = '[Job] Get Advanced Job Filters Success',
  GET_ADVANCED_JOB_FILTERS_FAILURE = '[Job] Get Advanced Job Filters Failure',

  GET_ADMIN_FILTERS_V1 = '[Job] Get Admin Filters V1',
  GET_ADMIN_FILTERS_V1_SUCCESS = '[Job] Get Admin Filters Success V1',
  GET_ADMIN_FILTERS_V1_FAILURE = '[Job] Get Admin Filters Failure V1',

  GET_ADMIN_FILTERS_V2 = '[Job] Get Admin Filters V2',
  GET_ADMIN_FILTERS_V2_SUCCESS = '[Job] Get Admin Filters Success V2',
  GET_ADMIN_FILTERS_V2_FAILURE = '[Job] Get Admin Filters Failure V2',

  GET_ADMIN_FILTERS_V3 = '[Job] Get Admin Filters V3',
  GET_ADMIN_FILTERS_V3_SUCCESS = '[Job] Get Admin Filters Success V3',
  GET_ADMIN_FILTERS_V3_FAILURE = '[Job] Get Admin Filters Failure V3',

  GET_ADMIN_FILTERS_V4 = '[Job] Get Admin Filters V4',
  GET_ADMIN_FILTERS_V4_SUCCESS = '[Job] Get Admin Filters Success V4',
  GET_ADMIN_FILTERS_V4_FAILURE = '[Job] Get Admin Filters Failure V4',

  GET_ADMIN_FILTERS_V5 = '[Job] Get Admin Filters V5',
  GET_ADMIN_FILTERS_V5_SUCCESS = '[Job] Get Admin Filters Success V5',
  GET_ADMIN_FILTERS_V5_FAILURE = '[Job] Get Admin Filters Failure V5',

  GET_JOB_LABELS = '[Job] Get Job Labels',
  CLEAR_MATCH_RATE = '[App] Clear Match Rate',
}
export interface IClearMatchRate {
  type: JobActionType.CLEAR_MATCH_RATE;
}
export interface IGetJobSearchGetJobLabels {
  type: JobActionType.GET_JOB_LABELS;
  payload: any;
}

export interface IGetJobSearchFilter {
  type: JobActionType.GET_JOB_SEARCH_FILTER;
  payload: any;
}

export interface IGetJobSearchFilterSuccess {
  type: JobActionType.GET_JOB_SEARCH_FILTER_SUCCESS;
  payload: any;
}

export interface IGetJobSearchFilterFailure {
  type: JobActionType.GET_JOB_SEARCH_FILTER_FAILURE;
  payload: any;
}

export interface IGetDefaultJobList {
  type: JobActionType.GET_DEFAULT_JOB_LIST;
  payload: any;
}

export interface IGetDefaultJobListSuccess {
  type: JobActionType.GET_DEFAULT_JOB_LIST_SUCCESS;
  payload: any;
}

export interface IGetDefaultJobListFailure {
  type: JobActionType.GET_DEFAULT_JOB_LIST_FAILURE;
  payload: any;
}

export interface IGetJobList {
  type: JobActionType.GET_JOB_LIST;
  payload: any;
}

export interface IGetJobListSuccess {
  type: JobActionType.GET_JOB_LIST_SUCCESS;
  payload: any;
}

export interface IGetJobListFailure {
  type: JobActionType.GET_JOB_LIST_FAILURE;
  payload: any;
}

export interface IGetSingleJobMatchRate {
  type: JobActionType.GET_SINGLE_JOB_MATCH_RATE;
  payload: any;
}

export interface IGetSingleJobMatchRateSuccess {
  type: JobActionType.GET_SINGLE_JOB_MATCH_RATE_SUCCESS;
  payload: any;
}

export interface IGetSingleJobMatchRateFailure {
  type: JobActionType.GET_SINGLE_JOB_MATCH_RATE_FAILURE;
  payload: any;
}

export interface IGetSavedJobList {
  type: JobActionType.GET_SAVED_JOB_LIST;
  payload: any;
}

export interface IGetSavedJobListSuccess {
  type: JobActionType.GET_SAVED_JOB_LIST_SUCCESS;
  payload: any;
}

export interface IGetSavedJobListFailure {
  type: JobActionType.GET_SAVED_JOB_LIST_FAILURE;
  payload: any;
}

export interface IGetSavedJobListIds {
  type: JobActionType.GET_SAVED_JOB_LIST_IDS;
  payload: any;
}

export interface IGetSavedJobListIdsSuccess {
  type: JobActionType.GET_SAVED_JOB_LIST_IDS_SUCCESS;
  payload: any;
}

export interface IGetSavedJobListIdsFailure {
  type: JobActionType.GET_SAVED_JOB_LIST_IDS_FAILURE;
  payload: any;
}

export interface ILikeSavedJobList {
  type: JobActionType.LIKE_SAVED_JOB_LIST;
  payload: any;
}

export interface ILikeSavedJobListSuccess {
  type: JobActionType.LIKE_SAVED_JOB_LIST_SUCCESS;
  payload: any;
}

export interface ILikeSavedJobListFailure {
  type: JobActionType.LIKE_SAVED_JOB_LIST_FAILURE;
  payload: any;
}

export interface IRemoveSavedJobList {
  type: JobActionType.REMOVE_SAVED_JOB_LIST;
  payload: any;
}

export interface IRemoveSavedJobListSuccess {
  type: JobActionType.REMOVE_SAVED_JOB_LIST_SUCCESS;
  payload: any;
}

export interface IRemoveSavedJobListFailure {
  type: JobActionType.REMOVE_SAVED_JOB_LIST_FAILURE;
  payload: any;
}

export interface IGetAdvancedJobFilters {
  type: JobActionType.GET_ADVANCED_JOB_FILTERS;
  payload: any;
}

export interface IGetAdvancedJobFiltersSuccess {
  type: JobActionType.GET_ADVANCED_JOB_FILTERS_SUCCESS;
  payload: any;
}

export interface IGetAdvancedJobFiltersFailure {
  type: JobActionType.GET_ADVANCED_JOB_FILTERS_FAILURE;
  payload: any;
}

export interface IGetAdminFiltersV1 {
  type: JobActionType.GET_ADMIN_FILTERS_V1;
  payload: any;
}

export interface IGetAdminFiltersV1Success {
  type: JobActionType.GET_ADMIN_FILTERS_V1_SUCCESS;
  payload: any;
}

export interface IGetAdminFiltersV1Failure {
  type: JobActionType.GET_ADMIN_FILTERS_V1_FAILURE;
  payload: any;
}

export interface IGetAdminFiltersV2 {
  type: JobActionType.GET_ADMIN_FILTERS_V2;
  payload: any;
}

export interface IGetAdminFiltersV2Success {
  type: JobActionType.GET_ADMIN_FILTERS_V2_SUCCESS;
  payload: any;
}

export interface IGetAdminFiltersV2Failure {
  type: JobActionType.GET_ADMIN_FILTERS_V2_FAILURE;
  payload: any;
}

export interface IGetAdminFiltersV3 {
  type: JobActionType.GET_ADMIN_FILTERS_V3;
  payload: any;
}

export interface IGetAdminFiltersV3Success {
  type: JobActionType.GET_ADMIN_FILTERS_V3_SUCCESS;
  payload: any;
}

export interface IGetAdminFiltersV3Failure {
  type: JobActionType.GET_ADMIN_FILTERS_V3_FAILURE;
  payload: any;
}

export interface IGetAdminFiltersV4 {
  type: JobActionType.GET_ADMIN_FILTERS_V4;
  payload: any;
}

export interface IGetAdminFiltersV4Success {
  type: JobActionType.GET_ADMIN_FILTERS_V4_SUCCESS;
  payload: any;
}

export interface IGetAdminFiltersV4Failure {
  type: JobActionType.GET_ADMIN_FILTERS_V4_FAILURE;
  payload: any;
}

export interface IGetAdminFiltersV5 {
  type: JobActionType.GET_ADMIN_FILTERS_V5;
  payload: any;
}

export interface IGetAdminFiltersV5Success {
  type: JobActionType.GET_ADMIN_FILTERS_V5_SUCCESS;
  payload: any;
}

export interface IGetAdminFiltersV5Failure {
  type: JobActionType.GET_ADMIN_FILTERS_V5_FAILURE;
  payload: any;
}

export type JobAction =
  | IClearMatchRate
  | IGetJobSearchGetJobLabels
  | IGetJobSearchFilter
  | IGetJobSearchFilterSuccess
  | IGetJobSearchFilterFailure
  | IGetDefaultJobList
  | IGetDefaultJobListSuccess
  | IGetDefaultJobListFailure
  | IGetJobList
  | IGetJobListSuccess
  | IGetJobListFailure
  | IGetSingleJobMatchRate
  | IGetSingleJobMatchRateSuccess
  | IGetSingleJobMatchRateFailure
  | IGetSavedJobList
  | IGetSavedJobListSuccess
  | IGetSavedJobListFailure
  | IGetSavedJobListIds
  | IGetSavedJobListIdsSuccess
  | IGetSavedJobListIdsFailure
  | ILikeSavedJobList
  | ILikeSavedJobListSuccess
  | ILikeSavedJobListFailure
  | IRemoveSavedJobList
  | IRemoveSavedJobListSuccess
  | IRemoveSavedJobListFailure
  | IGetAdvancedJobFilters
  | IGetAdvancedJobFiltersSuccess
  | IGetAdvancedJobFiltersFailure
  | IGetAdminFiltersV1
  | IGetAdminFiltersV1Success
  | IGetAdminFiltersV1Failure
  | IGetAdminFiltersV2
  | IGetAdminFiltersV2Success
  | IGetAdminFiltersV2Failure
  | IGetAdminFiltersV3
  | IGetAdminFiltersV3Success
  | IGetAdminFiltersV3Failure
  | IGetAdminFiltersV4
  | IGetAdminFiltersV4Success
  | IGetAdminFiltersV4Failure
  | IGetAdminFiltersV5
  | IGetAdminFiltersV5Success
  | IGetAdminFiltersV5Failure;
