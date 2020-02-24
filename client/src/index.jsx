import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/App';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

const root = document.getElementById('app');
ReactDom.render(<App />, root);
