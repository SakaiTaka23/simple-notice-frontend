type formData = {
  id: string;
  title: string;
  description: string;
  questions: question[];
};

type question =
  | {
      type: 'text';
      name: string;
      title: string;
      isRequired: boolean;
    }
  | {
      type: 'checkbox' | 'radio';
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
