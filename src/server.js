import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelloWorldComponent, HelloWorldPureComponent, HelloWorldFuncComponent, HelloWorldCreateElement } from './app';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const component = renderToString(<HelloWorldComponent />);
  const pureComponent = renderToString(<HelloWorldPureComponent />);
  const funcComponent = renderToString(<HelloWorldFuncComponent />);
  const createElementComponent = renderToString(HelloWorldCreateElement());

  res.send(
    template({
      body: `${component}
                ${pureComponent}
                ${funcComponent}
                ${createElementComponent}`,
      title: 'Hello World from the server',
    }),
  );
});

server.listen(8080);
