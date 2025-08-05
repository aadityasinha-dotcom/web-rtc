export interface IJob {
  jobId: number;
  applyLink: string;
  company: string;
  companyLogo: string;
  experience: string;
  jobTitle: string;
  jobType: string;
  jobUrgency: string;
  location: string;
  matchRate: string;
  postedOn: string;
  salary: string;
  qualification: string;
  technicalSkill: string;
}

export interface IFeaturedJob {
  applyLink: string;
  company: string;
  companyLogo: string;
  jobTitle: string;
  jobType: string;
  jobUrgency: string;
  location: string;
  postedOn: string;
  salary: string;
  customerCare: string;
}
