/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import FeedsWrapper from './components/organisms/FeedsWrapper';

import * as serviceWorker from './serviceWorker';

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

ReactDOM.hydrate(
  <Provider store={store}>
    <FeedsWrapper />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
