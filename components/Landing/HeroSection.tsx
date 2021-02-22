import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import { useStyles } from '../../theme/Theme';

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.glass}>
      <Grid container direction='row' justify='center' alignItems='center' spacing={10}>
        <Grid item xs={5}>
          <Typography variant='h4'>Servey Simply</Typography>
          <Typography variant='h5'>Take Serveys Of Things You Want To Know</Typography>
        </Grid>
        <Grid item xs={5}>
          <Image src='/svg/undraw_survey.svg' alt='hero img' width='700' height='700' />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroSection;
