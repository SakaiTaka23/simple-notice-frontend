import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../theme/Theme';

const AppealCreate = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.glass}>
      <Grid container direction='row' justify='center' alignItems='center' spacing={10}>
        <Grid item xs={5}>
          <img src='/svg/undraw_customer_survey.svg' alt='hero img' width='300' height='300' />
        </Grid>
        <Grid item xs={5}>
          <Typography variant='h4'>Create Serveys</Typography>
          <Typography variant='h5'>Create Serveys In Your Own Need</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AppealCreate;
