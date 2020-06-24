import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../app';
import configureStore from '../store';
import template from './template';

export default () => (req, res) => {
  const { store } = configureStore();
  const context = {};
  const renderRoot = () => <App context={context} location={req.url} Router={StaticRouter} store={store} />;

  const htmlString = renderToString(renderRoot());

  if (context.url) {
    res.writeHead(302, { Location: context.url });

    return res.end();
  }

  const preloadedState = store.getState();

  return res.send(template(htmlString, preloadedState));
};
