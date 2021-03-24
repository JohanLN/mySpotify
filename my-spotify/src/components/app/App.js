import React from 'react';
import { storage } from '../../redux/store';
import { Provider } from 'react-redux';
import Root from '../../router';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../../theme';

const App = () => {
  return (
    <Provider store={storage}>
      <CssBaseline/>
      <MuiThemeProvider theme={theme}>
        <Root/>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
