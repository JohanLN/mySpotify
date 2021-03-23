import React from 'react';
import { storage } from '../../redux/store';
import { Provider } from 'react-redux';
import Root from '../../router';

const App = () => {
  return (
    <Provider store={storage}>
      <Root/>
    </Provider>
  );
}

export default App;
