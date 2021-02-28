import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { formData } from '../../../type/formType';
import Questions from '../../../components/Questions';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from '../../../theme/Theme';

const Form: FC = () => {
  const classes = useStyles();
  const [surveyData, setSurveyData] = useState<formData>({
    id: '1',
    title: 'title',
    description: 'desc',
    questions: [],
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;

  const fetchSurveyData = async () => {
    const url = `http://127.0.0.1/api/survey/${id}`;
    const response = await axios.get(url);
    const newSurveyData = response.data;
    setSurveyData(newSurveyData[0]);
  };

  useEffect(() => {
    if (id) {
      fetchSurveyData();
      setLoading(false);
    }
  }, [id]);

  const { title, description, questions } = surveyData;

  if (loading || id === undefined) {
    return <h1>loading</h1>;
  }

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

export default Form;
