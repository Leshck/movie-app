import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SearchButton, SearchInput } from '../../components';

const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`;

const SearchBar = ({ onClick }) => (
  <SearchBarStyled>
    <SearchInput />
    <SearchButton onClick={onClick}>Search</SearchButton>
  </SearchBarStyled>
);

SearchBar.propTypes = {
  onClick: PropTypes.func,
};

export default SearchBar;
export { SearchBarStyled };
