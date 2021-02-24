import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../theme/Theme';

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Box paddingY={1} paddingTop={2}>
      <Paper className={classes.glass}>
        <Grid container direction='row' justify='center' alignItems='center' spacing={10}>
          <Grid item xs={5}>
            <Typography variant='h4'>Servey Simply</Typography>
            <Typography variant='h5'>Take Serveys Of Things You Want To Know</Typography>
          </Grid>
          <Grid item xs={5}>
            <img src='/svg/undraw_survey.svg' alt='hero img' width='300' height='300' />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HeroSection;
