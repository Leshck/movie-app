import React from 'react';
import { Header, Main, ErrorBoundary } from '../containers';
import { Footer } from '../components';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainApp = () => (
  <>
    <Header />
    <Main />
  </>
);

function App() {
  return (
    <ErrorBoundary>
      <AppStyled>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={MainApp} />
            <Route exact path={'/movie'} component={MainApp} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </AppStyled>
    </ErrorBoundary>
  );
}

export default App;
