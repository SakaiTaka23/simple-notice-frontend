const data = {
  id: 'some hashed id',
  title: 'title',
  description: 'some',
  questions: [
    {
      type: 'text',
      name: 'name',
      title: 'Your name:',
      isRequired: false,
    },
    {
      type: 'checkbox',
      name: 'food',
      title: 'What is your favorite food?',
      isRequired: false,
      choices: ['apple', 'orange'],
    },
    {
      type: 'radio',
      name: 'gender',
      title: 'title',
      isRequired: false,
      choices: ['male', 'female'],
    },
  ],
};

export default data;
