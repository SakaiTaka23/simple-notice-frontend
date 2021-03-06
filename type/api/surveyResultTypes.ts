type SurveyResult = {
  title: string;
  description: string;
  owner: string;
  questions: QuestionResult[];
};

type QuestionResult =
  | {
      title: string;
      type: 'text';
      label: string[];
    }
  | {
      title: string;
      type: 'checkbox' | 'radio';
      label: string[];
      data: number[];
    };

export type { SurveyResult, QuestionResult };
