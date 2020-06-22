import '@babel/polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import App from './app';

const { store } = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(<App Router={BrowserRouter} store={store} />, document.querySelector('#root'));
