import React from 'react';
import data from '../../data/mock_questions';

const Index = () => {
  const { questions } = data;

  return (
    <>
      Available Questions
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <h1>{question.title}</h1>
            <h2>{question.description}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Index;
