import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import AppRouter from './router/AppRouter';
import { light } from "./@utils/theme/index";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <AppRouter></AppRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
