export interface IEducationDetail {
  educationDuration: string;
  courseDuration: string;
  specialization: string;
  university: string;
  completedOn: string;
  gradingSystem: boolean;
  courseType: string;
}

export interface IEmploymentDetail {
  designation: string;
  organization: string;
  workingFrom: string;
  workedTill: string;
  currentCompany: boolean;
  noticePeriod: string;
  jobProfile: string;
}

export interface ICertificatationDetail {
  name: string;
  url: string;
  validFrom: string;
  validTill: string;
  neverExpire: boolean;
}

export interface IProjectDetail {
  projectTitle: string;
  client: string;
  workingFrom: string;
  workedTill: string;
  projectStatus: string | boolean;
  projectDetails: string;
}

export interface IResumeDetail {
  name: string | undefined;
  phoneNumber: string | undefined;
  emailAddress: string | undefined;
  headline: string | undefined | null;
  itSkills: string | undefined | null;
  keySkills: string | undefined | null;
  projectDetails: IProjectDetail[];
  employmentDetails: IEmploymentDetail[];
  educationDetails: IEducationDetail[];
  certificationDetails: ICertificatationDetail[];
}

export interface IResumeFormState {
  headline: {
    value: string | undefined;
    valid: boolean;
  };
  keySkills: {
    value: string | undefined;
    valid: boolean;
  };
  employmentDetails: {
    value: IEmploymentDetail[];
    valid: boolean;
  };
  educationDetails: {
    value: IEducationDetail[];
    valid: boolean;
  };
  itSkills: {
    value: string | undefined;
    valid: boolean;
  };
  projectDetails: {
    value: IProjectDetail[];
    valid: boolean;
  };
  certificationDetails: {
    value: ICertificatationDetail[];
    valid: boolean;
  };
}
