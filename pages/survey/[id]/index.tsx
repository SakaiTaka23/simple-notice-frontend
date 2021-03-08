import React, { FC } from 'react';
import { question } from '../../../type/formType';
import Questions from '../../../components/SurveyAnswer/Questions';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from '../../../theme/Theme';
import { GetServerSideProps } from 'next';

type Props = {
  id: string;
  title: string;
  description: string;
  questions: question[];
};

const Form: FC<Props> = ({ id, title, description, questions }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: 70 }}>
      <Grid container direction='column' justify='center' spacing={6}>
        <Paper className={classes.glass}>
          <Box p={10}>
            <Typography variant='h3'>{title}</Typography>
            <br />
            <Typography variant='h4'>{description}</Typography>
            <br />
            <hr />
            <Questions id={id} questions={questions} />
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const response = await fetch(`http://127.0.0.1/api/survey/${id}`);

  if (response.status === 400) {
    return { notFound: true };
  }

  const data = await response.json();
  const { title, description, questions } = data[0];

  return {
    props: {
      id,
      title,
      description,
      questions,
    },
  };
};

export default Form;
