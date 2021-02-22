import { Grid } from '@material-ui/core';
import React from 'react';
import AppealAnalize from '../components/Landing/AppealAnalize';
import AppealCreate from '../components/Landing/AppealCreate';
import HeroSection from '../components/Landing/HeroSection';

const index = () => {
  return (
    <>
      <HeroSection />
      <Grid container direction='column'>
        <AppealCreate />
        <AppealAnalize />
      </Grid>
    </>
  );
};

export default index;
