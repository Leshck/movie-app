// @flow
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetSearch } from '../../store/actions/movie';
import { Header, Main } from '../../containers';
import { Footer } from '../../components';

type Props = {
  search: string,
};

const Search = ({ search }: Props) => {
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

export default Search;
