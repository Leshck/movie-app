import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles';
import { ErrorBoundary } from './containers';
import { NotFound } from './components';
import Search from './containers/pages/Search';
import Movie from './containers/pages/Movie';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <AppStyled>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="/search/:search" render={({ match }) => <Search search={match.params.search} />}></Route>
          <Route path="/movie/:id" render={({ match }) => <Movie id={match.params.id} />} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </AppStyled>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
export { AppStyled };
