type createSurveyType = {
  title: string;
  description: string;
  owner: string;
  delete_pass: string;
  from: string;
  to: string;
  questions: question[];
};

type question = {
  title: string;
  type: 'text' | 'check' | 'radio';
  is_required: boolean;
  nestedArray: string[];
};

export type { createSurveyType };
