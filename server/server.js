import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import configureStore from '../src/store';
import FeedsWrapper from '../src/components/organisms/FeedsWrapper/FeedsWrapper';

module.exports = function render(initialState) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState);

  // render the App store static markup ins content variable
  const content = renderToString(
    <Provider store={store}>
      <FeedsWrapper />
    </Provider>,
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();

  return { content, preloadedState };
};
