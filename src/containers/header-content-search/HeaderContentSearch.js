import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title } from '../../components';
import SearchBar from '../search/SearchBar';
import ButtonGroup from '../button-group/ButtonGroup';
import { getMovies, changeSearchBy } from '../../store/actions/movie';

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

const HeaderContentSearch = ({ height, searchBy, getMovies, changeSearchBy }) => {
  const handleSearchByChange = (searchBy) => {
    changeSearchBy(searchBy);
    getMovies();
  };
  return (
    <HeaderContentSearchStyled height={height}>
      <Title>Find your movie</Title>
      <SearchBar />
      <ButtonGroup
        title="Search By"
        values={['title', 'genres']}
        activeBtn={searchBy}
        onClick={handleSearchByChange}
      ></ButtonGroup>
    </HeaderContentSearchStyled>
  );
};

HeaderContentSearch.propTypes = {
  height: PropTypes.number,
  searchBy: PropTypes.string,
  getMovies: PropTypes.func,
  changeSearchBy: PropTypes.func,
};

const mapStateToProps = (state) => ({
  searchBy: state.movie.searchBy,
});

const mapDispatchToProps = {
  getMovies,
  changeSearchBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContentSearch);
export { HeaderContentSearchStyled, HeaderContentSearch };
