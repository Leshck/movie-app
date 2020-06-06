import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { resetSearch } from '../../store/actions/movie';
import { Header, Main } from '../../containers';
import { Footer } from '../../components';

const Search = ({ search }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetSearch());
    };
  }, []);
  return (
    <>
      <Header search={search || ''} />
      <Main mode="search" />
      <Footer />
    </>
  );
};

Search.propTypes = {
  search: PropTypes.string,
};

export default Search;
