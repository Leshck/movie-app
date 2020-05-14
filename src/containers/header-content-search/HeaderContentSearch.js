import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title } from '../../components';
import SearchBar from '../search/SearchBar';
import ButtonGroup from '../button-group/ButtonGroup';

const HeaderContentSearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  z-index: 9999;
  padding: 0 150px;
  box-sizing: border-box;
`;

const HeaderContentSearch = ({ height }) => {
  const [sortBy, setSortBy] = useState('title');
  return (
    <HeaderContentSearchStyled height={height}>
      <Title>Find your movie</Title>
      <SearchBar></SearchBar>
      <ButtonGroup title="Search By" values={['title', 'genre']} activeBtn={sortBy} onClick={setSortBy}></ButtonGroup>
    </HeaderContentSearchStyled>
  );
};

HeaderContentSearch.propTypes = {
  height: PropTypes.number,
};

export default HeaderContentSearch;
export { HeaderContentSearchStyled };
