const data = {
  id: 'some id',
  title: 'title',
  description: 'some description',
  questions: [
    {
      type: 'text',
      name: 'name',
      title: 'Your name:',
    },
    {
      type: 'text',
      name: 'email',
      title: 'Your e-mail',
    },
    {
      type: 'checkbox',
      name: 'food',
      title: 'What is your favorite food?',
      isRequired: true,
      hasSelectAll: true,
      hasNone: true,
      noneText: 'None of the above',
      colCount: 4,
      choicesOrder: 'asc',
      choices: ['apple', 'orange'],
    },
    {
      type: 'checkbox',
      name: 'car',
      title: 'What car are you driving?',
      isRequired: true,
      hasSelectAll: true,
      hasNone: true,
      noneText: 'None of the above',
      colCount: 4,
      choicesOrder: 'asc',
      choices: ['Ford', 'Tesla'],
    },
  ],
};

export default data;
