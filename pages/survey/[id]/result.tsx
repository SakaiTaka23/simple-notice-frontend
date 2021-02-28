import { Box, Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Results from '../../../components/Results';
import { useStyles } from '../../../theme/Theme';
import { SurveyResult } from '../../../type/api/surveyResultTypes';

const Result = () => {
  const classes = useStyles();
  const [resultData, setResultData] = useState<SurveyResult>({
    title: 'title',
    description: 'desc',
    owner: 'owner',
    questions: [],
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;

  const fetchResultData = async () => {
    const url = `http://127.0.0.1/api/survey/${id}/result`;
    const response = await axios.get(url);
    const newResultData = response.data;
    setResultData(newResultData);
  };

  useEffect(() => {
    if (id) {
      fetchResultData();
      setLoading(false);
    }
  }, [id]);

  const { questions } = resultData;
  console.log(questions);

  if (loading || id === undefined) {
    return <h1>loading</h1>;
  }

  return (
    <div style={{ padding: 70 }}>
      <Grid container direction='column' justify='center' spacing={6}>
        <Box py={3}>
          <Paper className={classes.glass}>
            <Typography variant='h3'>{resultData.title}</Typography>
            <Typography variant='h4'>{resultData.description}</Typography>
            <Typography variant='h5'>{resultData.owner}</Typography>
          </Paper>
        </Box>
        <Results key='1' questions={questions} />
      </Grid>
    </div>
  );
};

export default Result;
