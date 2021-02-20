import { createMuiTheme, makeStyles } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba( 74, 74, 74, 0.40 )',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles({
  glass: {
    background: 'rgba(74,74,74,0.40)',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur(5.0px)',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    color: 'white',
  },
  textField: {
    width: '500px',
  },
});

export { theme, useStyles };
