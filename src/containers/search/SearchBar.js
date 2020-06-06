import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchButton, SearchInput } from '../../components';
import { getMovies, changeSearch } from '../../store/actions/movie';

const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`;

const SearchBar = ({ getMovies, changeSearch }) => {
  const [search, setSearch] = useState('');
  const handleSearch = useCallback(() => {
    changeSearch(search);
    getMovies();
  }, [search]);
  const onChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  return (
    <SearchBarStyled>
      <SearchInput onChange={onChange} value={search} />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {
  getMovies: PropTypes.func,
  changeSearch: PropTypes.func,
};

const mapDispatchToProps = {
  getMovies,
  changeSearch,
};

export default connect(null, mapDispatchToProps)(SearchBar);
export { SearchBarStyled, SearchBar };
