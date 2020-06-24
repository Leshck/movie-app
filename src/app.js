import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import GlobalStyle from './styles';
import { ErrorBoundary } from './containers';
import { NotFound } from './components';
import Search from './containers/pages/Search';
import Movie from './containers/pages/Movie';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router location={location} context={context}>
        <AppStyled>
          <GlobalStyle />
          <Switch>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route path="/search/:search" render={({ match }) => <Search search={match.params.search} />}></Route>
            <Route path="/movie/:id" render={({ match }) => <Movie id={match.params.id} />} />
            <Redirect exact from="/" to="/search" />
            <Route path="/*" component={NotFound} />
          </Switch>
        </AppStyled>
      </Router>
    </ErrorBoundary>
  </Provider>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  store: PropTypes.object.isRequired,
  context: PropTypes.object,
};

export default App;
export { AppStyled };
