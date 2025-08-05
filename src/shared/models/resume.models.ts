import {
  ICertificatationDetail,
  IEducationDetail,
  IEmploymentDetail,
  IProjectDetail,
} from 'shared/interfaces/resume.interface';

export interface IResumeFormField {
  value: any;
  valid: boolean;
}

export class EducationDetailModel {
  educationDuration: string;
  courseDuration: string;
  specialization: string;
  university: string;
  completedOn: string;
  gradingSystem: boolean;
  courseType: string;

  constructor(
    educationDuration?: string,
    courseDuration?: string,
    specialization?: string,
    university?: string,
    completedOn?: string,
    gradingSystem?: boolean,
    courseType?: string
  ) {
    this.educationDuration = educationDuration || '';
    this.courseDuration = courseDuration || '';
    this.specialization = specialization || '';
    this.university = university || '';
    this.completedOn = completedOn || '';
    this.gradingSystem = gradingSystem || false;
    this.courseType = courseType || '';
  }
}

export class EmploymentDetailModel {
  designation: string;
  organization: string;
  workingFrom: string;
  workedTill: string;
  currentCompany: boolean;
  noticePeriod: string;
  jobProfile: string;
  constructor(
    designation?: string,
    organization?: string,
    workingFrom?: string,
    workedTill?: string,
    currentCompany?: boolean,
    noticePeriod?: string,
    jobProfile?: string
  ) {
    this.designation = designation || '';
    this.organization = organization || '';
    this.workingFrom = workingFrom || '';
    this.workedTill = workedTill || '';
    this.currentCompany = currentCompany || false;
    this.noticePeriod = noticePeriod || '';
    this.jobProfile = jobProfile || '';
  }
}

export class CertificatationDetailModel {
  name: string;
  url: string;
  validFrom: string;
  validTill: string;
  neverExpire: boolean;
  constructor(
    name?: string,
    url?: string,
    validFrom?: string,
    validTill?: string,
    neverExpire?: boolean
  ) {
    this.name = name || '';
    this.url = url || '';
    this.validFrom = validFrom || '';
    this.validTill = validTill || '';
    this.neverExpire = neverExpire || false;
  }
}

export class ProjectDetailModel {
  projectTitle: string;
  client: string;
  workingFrom: string;
  workedTill: string;
  projectStatus: string | boolean;
  projectDetails: string;
  constructor(
    projectTitle?: string,
    client?: string,
    workingFrom?: string,
    workedTill?: string,
    projectStatus?: string | boolean,
    projectDetails?: string
  ) {
    this.projectTitle = projectTitle || '';
    this.client = client || '';
    this.workingFrom = workingFrom || '';
    this.workedTill = workedTill || '';
    this.projectStatus = projectStatus || '';
    this.projectDetails = projectDetails || '';
  }
}

export class ResumeFormModel {
  headline: IResumeFormField;
  keySkills: IResumeFormField;
  employmentDetails: IResumeFormField;
  educationDetails: IResumeFormField;
  itSkills: IResumeFormField;
  projectDetails: IResumeFormField;
  certificationDetails: IResumeFormField;
  constructor(
    headline?: IResumeFormField,
    itSkills?: IResumeFormField,
    keySkills?: IResumeFormField,
    educationDetails?: IResumeFormField,
    employmentDetails?: IResumeFormField,
    certificationDetails?: IResumeFormField,
    projectDetails?: IResumeFormField
  ) {
    this.headline =
      headline && headline.value
        ? headline
        : {
            value: '',
            valid: false,
          };
    this.itSkills =
      itSkills && itSkills.value
        ? itSkills
        : {
            value: '',
            valid: false,
          };
    this.keySkills =
      keySkills && keySkills.value
        ? keySkills
        : {
            value: '',
            valid: false,
          };
    this.employmentDetails =
      employmentDetails &&
      employmentDetails.value &&
      employmentDetails.value.length
        ? employmentDetails
        : {
            value: [],
            valid: false,
          };
    this.educationDetails =
      educationDetails &&
      educationDetails.value &&
      educationDetails.value.length
        ? educationDetails
        : {
            value: [],
            valid: false,
          };
    this.certificationDetails =
      certificationDetails &&
      certificationDetails.value &&
      certificationDetails.value.length
        ? certificationDetails
        : {
            value: [],
            valid: false,
          };
    this.projectDetails =
      projectDetails && projectDetails.value && projectDetails.value.length
        ? projectDetails
        : {
            value: [],
            valid: false,
          };
  }
}
