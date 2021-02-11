import React, { FC } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { QuestionResult } from '../type/api/surveyResultTypes';

type Prop = {
  questions: QuestionResult[];
};

const Results: FC<Prop> = ({ questions }) => {
  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      {questions.map((question, index) => {
        if (question.type === 'text') {
          return (
            <div key={index}>
              <h3>{question.title}</h3>
              {question.label.map((answer) => {
                return <p key={answer}>{answer}</p>;
              })}
            </div>
          );
        }
        if (question.type === 'checkbox' || question.type === 'radio') {
          const data = {
            labels: question.label,
            datasets: [
              {
                label: 'votes',
                data: question.data,
              },
            ],
          };
          return (
            <div key={index}>
              <h3>{question.title}</h3>
              <HorizontalBar data={data} options={options} />
            </div>
          );
        }
      })}
    </>
  );
};

export default Results;
