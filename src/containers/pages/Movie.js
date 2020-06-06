import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { resetMovie } from '../../store/actions/movie';
import { Header, Main } from '../../containers';
import { Footer } from '../../components';

const Movie = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetMovie());
    };
  }, []);
  return (
    <>
      <Header id={id} />
      <Main mode="movie" />
      <Footer />
    </>
  );
};

Movie.propTypes = {
  id: PropTypes.string,
};

export default Movie;
