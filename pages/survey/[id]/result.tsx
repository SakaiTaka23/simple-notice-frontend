import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import Results from '../../../components/Results';
import { useStyles } from '../../../theme/Theme';
import { QuestionResult } from '../../../type/api/surveyResultTypes';

type Props = {
  title: string;
  description: string;
  owner: string;
  questions: QuestionResult[];
};

const Result: FC<Props> = ({ title, description, owner, questions }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: 70 }}>
      <Grid container direction='column' justify='center' spacing={6}>
        <Box py={3}>
          <Paper className={classes.glass}>
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='h4'>{description}</Typography>
            <Typography variant='h5'>{owner}</Typography>
          </Paper>
        </Box>
        <Results key='1' questions={questions} />
      </Grid>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const response = await fetch(`http://127.0.0.1/api/survey/${id}/result`);

  if (response.status === 400) {
    return { notFound: true };
  }

  const data = await response.json();
  const { title, description, owner, questions } = data;

  return {
    props: {
      title,
      description,
      owner,
      questions,
    },
  };
};

export default Result;
