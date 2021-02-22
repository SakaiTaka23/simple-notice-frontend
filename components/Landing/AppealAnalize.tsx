import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../theme/Theme';

const AppealAnalize = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.glass}>
      <Grid container direction='row' justify='center' alignItems='center' spacing={10}>
        <Grid item xs={5}>
          <Typography variant='h4'>Analize Results</Typography>
          <Typography variant='h5'>It Will Appear Visually As Chart</Typography>
        </Grid>
        <Grid item xs={5}>
          <img src='/svg/undraw_analyze.svg' alt='hero img' width='300' height='300' />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AppealAnalize;
