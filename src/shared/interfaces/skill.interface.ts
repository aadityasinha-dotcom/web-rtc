export interface ITestTopic {
  name: string;
  skills: string;
  description: string;
}

export interface ITestQuestion {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE?: string;
}

export interface IAssessmentPreview {
  question: string;
  answers: { answer: string; selected: boolean }[];
}

export interface ISkillResult {
  topic: string;
  result: string;
  range: string;
}
