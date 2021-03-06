import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container direction='row' spacing={10}>
          <Grid item xs={3}>
            <Link href='/survey'>
              <a>
                <Typography variant='h6'>Simple Notice</Typography>
              </a>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/survey/now'>
              <a>
                <Typography variant='h6'>Available</Typography>
              </a>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/survey/future'>
              <a>
                <Typography variant='h6'>Coming</Typography>
              </a>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/survey/past'>
              <a>
                <Typography variant='h6'>Ended</Typography>
              </a>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/survey/create'>
              <a>
                <Typography variant='h6'>Create</Typography>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
