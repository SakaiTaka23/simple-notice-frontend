import { Box, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { useStyles } from '../../theme/Theme';
import { QuestionResult } from '../../type/api/surveyResultTypes';

type Prop = {
  questions: QuestionResult[];
};

const Results: FC<Prop> = ({ questions }) => {
  const classes = useStyles();
  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: 'white',
            fontSize: 15,
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: 'white',
            fontSize: 15,
          },
        },
      ],
    },
  };
  const legend = {
    labels: {
      fontColor: 'white',
      fontSize: 20,
    },
  };

  return (
    <>
      {questions.map((question, index) => {
        if (question.type === 'text') {
          return (
            <Box py={2} key={index}>
              <Paper className={classes.glass}>
                <Typography variant='h5'>{question.title}</Typography>
                {question.label.map((answer, index) => {
                  return (
                    <Typography key={index} variant='subtitle1'>
                      {answer}
                    </Typography>
                  );
                })}
              </Paper>
            </Box>
          );
        }
        if (question.type === 'checkbox' || question.type === 'radio') {
          const data = {
            labels: question.label,
            datasets: [
              {
                label: 'votes',
                data: question.data,
                backgroundColor: 'rgba(30, 144, 255, 1)',
              },
            ],
          };

          return (
            <Box py={2} key={index}>
              <Paper className={classes.glass}>
                <Typography variant='h5'>{question.title}</Typography>
                <HorizontalBar data={data} options={options} legend={legend} />
              </Paper>
            </Box>
          );
        }
      })}
    </>
  );
};

export default Results;
