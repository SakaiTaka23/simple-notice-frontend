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
      is_required: boolean;
    }
  | {
      type: 'checkbox' | 'radio';
      name: string;
      title: string;
      is_required: boolean;
      choices: string[];
    };

export type { formData, question };
