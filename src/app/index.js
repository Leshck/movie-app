import React from 'react';

import HelloWorldComponent from './component';
import HelloWorldPureComponent from './pure-component';
import HelloWorldFuncComponent from './func-component';
import HelloWorldCreateElement from './create-element';

const App = () => (
  <>
    <HelloWorldComponent />
    <HelloWorldPureComponent />
    <HelloWorldFuncComponent />
    {HelloWorldCreateElement()}
  </>
);

export default App;
