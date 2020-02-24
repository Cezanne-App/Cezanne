import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/App';

const App = () => (
  <Provider store={store} >
    <AppContainer />
  </Provider>
);

ReactDom.render(<App />, document.getElementById('app'));