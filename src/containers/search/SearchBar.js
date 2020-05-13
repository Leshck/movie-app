import React from 'react';
import styled from 'styled-components';
import { SearchButton, SearchInput } from '../../components';

const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`;

const SearchBar = () => (
  <SearchBarStyled>
    <SearchInput />
    <SearchButton />
  </SearchBarStyled>
);

export default SearchBar;
