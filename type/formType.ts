type formData = {
  id: string;
  title: string;
  description: string;
  questions: question[];
};

type question =
  | {
      type: string;
      name: string;
      title: string;
    }
  | {
      type: string;
      name: string;
      title: string;
      isRequired: boolean;
      hasSelectAll: boolean;
      hasNone: boolean;
      noneText: string;
      colCount: number;
      choicesOrder: string;
      choices: string[];
    };

export type { formData, question };
