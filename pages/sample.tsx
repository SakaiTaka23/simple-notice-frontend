import React from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

const Index = () => {
  const json = {
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

  const survey = new Survey.Model(json);
  survey.onComplete.add(function (result) {
    console.log(result.data);
  });

  return (
    <div className='App'>
      <h1>SurveyJS react example</h1>
      <h2>Checkbox - none of the above and select all</h2>
      <Survey.Survey model={survey} />;
    </div>
  );
};

export default Index;
