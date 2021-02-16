import { Paper, Typography } from '@material-ui/core';
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
              <Typography variant='subtitle1'>{question.title}</Typography>
              {question.label.map((answer) => {
                return <Paper key={answer}>{answer}</Paper>;
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
              <Typography variant='subtitle1'>{question.title}</Typography>
              <HorizontalBar data={data} options={options} />
            </div>
          );
        }
      })}
    </>
  );
};

export default Results;
