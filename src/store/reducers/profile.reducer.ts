import {
  ProfileAction,
  ProfileActionType,
} from 'store/action-types/profile.types';

export interface PortFolioFormState {
  network: string;
  url: string;
}

export interface IProfileFormState {
  name: string;
  jobTitle: string;
  showProfile: boolean;
  experience: string;
  dob: string;
  phoneNumber: string;
  emailAddress: string;
  salaryType: string;
  salary: string;
  language: string;
  qualification: string;
  address: string;
  location: string;
  profileUrl: string;
  description: string;
  userSocialProfile: PortFolioFormState[];
  imageUrl: string;
}

export interface ProfileInitialState {
  isGetProfile: boolean;
  userDashboard: any;
  isProfileSuccess: boolean;
  profileData: IProfileFormState;
  isUpdateProfile: boolean;
  updateProfileLoading: boolean;
  isUpdateProfileSuccess: boolean;
  isImageUploading: boolean;
  isImageUploadSuccess: boolean;
  profileError: string | undefined;
  profilePicTure: string;
  isDeletePortFolio: boolean;
  isDeletePortFolioSuccess: boolean;
  isAccountVerified: boolean;
  isPasswordChanging: boolean;
  isPasswordChanged: boolean;
}

const initialState: ProfileInitialState = {
  isGetProfile: false,
  userDashboard: [],
  isProfileSuccess: false,
  profileData: {
    name: '',
    showProfile: true,
    jobTitle: '',
    experience: '',
    dob: '',
    phoneNumber: '',
    emailAddress: '',
    salaryType: '',
    salary: '',
    language: '',
    qualification: '',
    address: '',
    location: '',
    profileUrl: '',
    description: '',
    userSocialProfile: [],
    imageUrl: '',
  },
  isUpdateProfile: false,
  updateProfileLoading: false,
  isUpdateProfileSuccess: false,
  isImageUploading: false,
  isImageUploadSuccess: false,
  profileError: undefined,
  profilePicTure: '',
  isDeletePortFolio: false,
  isDeletePortFolioSuccess: false,
  isAccountVerified: true,
  isPasswordChanging: false,
  isPasswordChanged: false,
};

export default function appReducers(
  state: ProfileInitialState = initialState,
  action: ProfileAction
) {
  switch (action.type) {
    case ProfileActionType.GET_USER_DASHBOARD: {
      return {
        ...state,
        isGetProfile: true,
      };
    }
    case ProfileActionType.GET_USER_DASHBOARD_SUCCESS: {
      return {
        ...state,
        isGetProfile: false,
        userDashboard: action.payload,
      };
    }
    case ProfileActionType.GET_USER_DASHBOARD_FAILURE: {
      return {
        ...state,
        isGetProfile: false,
        profileError: action.payload,
      };
    }
    case ProfileActionType.GET_PROFILE: {
      return {
        ...state,
        isGetProfile: true,
        profileImage: '',
      };
    }
    case ProfileActionType.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        isGetProfile: false,
        isProfileSuccess: true,
        isUpdateProfileSuccess: false,
        profileData: action.payload,
      };
    }
    case ProfileActionType.GET_PROFILE_FAILURE: {
      return {
        ...state,
        isGetProfile: false,
        isProfileSuccess: false,
        profileError: action.payload,
      };
    }
    case ProfileActionType.UPDATE_PROFILE: {
      return {
        ...state,
        isUpdateProfile: true,
      };
    }
    case ProfileActionType.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        isUpdateProfile: false,
        isUpdateProfileSuccess: true,
      };
    }
    case ProfileActionType.GET_PROFILE_FAILURE: {
      return {
        ...state,
        isUpdateProfile: false,
        isUpdateProfileSuccess: false,
        profileError: action.payload,
      };
    }
    case ProfileActionType.UPDATE_IMAGE: {
      return {
        ...state,
        isImageUploading: true,
      };
    }
    case ProfileActionType.UPDATE_IMAGE_SUCCESS: {
      return {
        ...state,
        isImageUploading: false,
        isImageUploadSuccess: true,
        profilePicTure: action.payload,
      };
    }
    case ProfileActionType.UPDATE_IMAGE_FAILURE: {
      return {
        ...state,
        isImageUploading: false,
        isImageUploadSuccess: false,
        profileError: action.payload,
      };
    }
    case ProfileActionType.DELETE_PORTFOLIO: {
      return {
        ...state,
        isDeletePortFolio: true,
      };
    }
    case ProfileActionType.DELETE_PORTFOLIO_SUCCESS: {
      return {
        ...state,
        isDeletePortFolio: false,
        isDeletePortFolioSuccess: true,
      };
    }
    case ProfileActionType.DELETE_PORTFOLIO_FAILURE: {
      return {
        ...state,
        isDeletePortFolio: false,
        isDeletePortFolioSuccess: false,
        profileError: action.payload,
      };
    }
    case ProfileActionType.ACCOUNT_VERIFIED_SUCCESS: {
      return {
        ...state,
        isAccountVerified: action.payload,
      };
    }
    case ProfileActionType.CHANGE_PASSWORD: {
      return {
        ...state,
        isPasswordChanging: true,
        isPasswordChanged: false,
      };
    }
    case ProfileActionType.CHANGE_PASSWORD_FAILURE: {
      return {
        ...state,
        isPasswordChanging: false,
      };
    }
    case ProfileActionType.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        isPasswordChanged: true,
        isPasswordChanging: false,
      };
    }
    case ProfileActionType.SET_MSG: {
      return {
        ...state,
        profileError: action.payload,
      };
    }
    case ProfileActionType.CLEAR_PROFILE: {
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
}
