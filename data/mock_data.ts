const data = {
  id: 'some hashed id',
  title: 'title',
  description: 'some',
  questions: [
    {
      type: 'text',
      name: 'name',
      title: 'Your name:',
    },
    {
      type: 'checkbox',
      name: 'food',
      title: 'What is your favorite food?',
      isRequired: true,
      choices: ['apple', 'orange'],
    },
    {
      type: 'radio',
      name: 'gender',
      title: 'title',
      isRequired: true,
      choices: ['male', 'female'],
    },
  ],
};

export default data;
