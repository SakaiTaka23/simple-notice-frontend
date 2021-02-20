import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Surveys } from '../../type/api/surveyTypes';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from '../../theme/Theme';

const Index = () => {
  const classes = useStyles();
  const [surveys, setSurveys] = useState<Surveys>([]);

  const fetchSurveys = async () => {
    const url = 'http://127.0.0.1/api/survey';
    const response = await axios.get(url);
    const newSurveys = response.data;
    setSurveys(newSurveys);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <div style={{ padding: '100px' }}>
      <Grid container direction='column' spacing={8}>
        <Box pb={3}>
          <Paper className={classes.glass}>
            <Box display='flex' justifyContent='center' p={3}>
              <Typography variant='h3'>Available Questions</Typography>
            </Box>
          </Paper>
        </Box>
        {surveys.map((survey, index) => {
          return (
            <Box py={2} key={index}>
              <Paper className={classes.glass}>
                <Box pl={5} py={4}>
                  <Link href={`/survey/${survey.id}`}>
                    <a>
                      <Typography variant='h4'>{survey.title}</Typography>
                      <Typography variant='h5'>{survey.description}</Typography>
                    </a>
                  </Link>
                  <Link href={`/survey/${survey.id}/result`}>
                    <a>デバッグ用 : 結果へのリンク</a>
                  </Link>
                </Box>
              </Paper>
            </Box>
          );
        })}
      </Grid>
    </div>
  );
};

export default Index;
