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

const movies = [
  {
    url: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    title: 'Guardians of the Galaxy Vol. 3',
    year: '2020',
    genre: 'Science Fiction',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
    title: 'Transformers 7',
    year: '2019',
    genre: 'Science Fiction',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg',
    title: 'Untitled Avengers',
    year: '2019',
    genre: 'Action',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
    title: 'Shazam!',
    year: '2018',
    genre: 'Fantasy',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
    title: 'X-Men: Dark Phoenix',
    year: '2013',
    genre: 'Science Fiction',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg',
    title: 'Journey 3: From the Earth to the Moon',
    year: '2018',
    genre: 'Fantasy',
  },
];

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <AppStyled>
        <GlobalStyle />
        <Header />
        <Main movies={movies} />
        <Footer />
      </AppStyled>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
export { AppStyled };
