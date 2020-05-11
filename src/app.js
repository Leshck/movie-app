import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles';
import { Header, Main, ErrorBoundary } from './containers';
import { Footer } from './components';

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
        <GlobalStyle />
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
