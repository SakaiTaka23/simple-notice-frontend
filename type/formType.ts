type formData = {
  id: string;
  title: string;
  description: string;
  questions: question[];
};

type question =
  | {
      type: 'text';
      question_number: number;
      title: string;
      is_required: boolean;
    }
  | {
      type: 'checkbox' | 'radio';
      question_number: number;
      title: string;
      is_required: boolean;
      choices: string[];
    };

export type { formData, question };
