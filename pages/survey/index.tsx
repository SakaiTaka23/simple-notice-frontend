import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Surveys } from '../../type/api/surveyTypes';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from '../../theme/Theme';
import SurveyCard from '../../components/SurveyCard';

const Index = () => {
  const classes = useStyles();
  const [surveys, setSurveys] = useState<Surveys>([]);
  const [pageNum, setPageNum] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchSurveys = async () => {
    const url = `http://127.0.0.1/api/survey?page=${pageNum}`;
    const response = await axios.get(url);
    const newSurveys = response.data;
    setSurveys(newSurveys.data);
    setLastPage(newSurveys.last_page);
    console.log(newSurveys);
  };

  useEffect(() => {
    fetchSurveys();
  }, [pageNum]);

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
          return <SurveyCard key={index} survey={survey} />;
        })}
        <Box display='flex' justifyContent='center' pt={3}>
          <Paper className={classes.glass}>
            <Box m={5}>
              <Pagination
                showFirstButton
                showLastButton
                count={lastPage}
                size='large'
                variant='outlined'
                color='primary'
                onChange={(e, page) => setPageNum(page)}
              />
            </Box>
          </Paper>
        </Box>
      </Grid>
    </div>
  );
};

export default Index;
