import { MuiThemeProvider } from '@material-ui/core';
import { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import { theme } from '../theme/Theme';

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
};

export default App;
