import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles';
import { Header, Main, ErrorBoundary } from './containers';
import { Footer } from './components';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <AppStyled>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </AppStyled>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
export { AppStyled };
