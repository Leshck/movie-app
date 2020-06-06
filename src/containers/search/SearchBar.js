import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SearchButton, SearchInput } from '../../components';
import { getMovies, changeSearch } from '../../store/actions/movie';

const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`;

const SearchBar = ({ getMovies, changeSearch, searchParam }) => {
  const [searchString, setSearch] = useState('');

  useEffect(() => {
    if (!searchString) {
      setSearch(searchParam);
    }
    changeSearch(searchParam);
    getMovies();
  }, [searchParam]);

  const history = useHistory();

  const handleSearch = useCallback(() => {
    history.push(`/search/${searchString}`);
  }, [searchString]);

  const onChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  return (
    <SearchBarStyled>
      <SearchInput onChange={onChange} value={searchString} />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {
  getMovies: PropTypes.func,
  changeSearch: PropTypes.func,
  searchParam: PropTypes.string,
};

const mapDispatchToProps = {
  getMovies,
  changeSearch,
};

export default connect(null, mapDispatchToProps)(SearchBar);
export { SearchBarStyled, SearchBar };
