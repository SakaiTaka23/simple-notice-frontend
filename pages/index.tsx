import { Box, Grid } from '@material-ui/core';
import React from 'react';
import AppealOne from '../components/Landing/AppealOne';
import HeroSection from '../components/Landing/HeroSection';

const index = () => {
  return (
    <>
      <HeroSection />
      <Grid container direction='column'>
        <AppealOne />
      </Grid>
    </>
  );
};

export default index;
