import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../constants/colors';
import ButtonGroup from '../button-group/ButtonGroup';
import { ResultsTitle } from '../../components';

const ControllerBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.GREY_0};
  justify-content: space-between;
  padding: 0 150px;
`;

const MainPageControllerBar = ({ total, sortBy, handleSortByChange }) => {
  return (
    <>
      <ResultsTitle>{total} movie found</ResultsTitle>
      <ButtonGroup
        title="Sort by"
        values={['release_date', 'rating']}
        activeBtn={sortBy}
        onClick={handleSortByChange}
      ></ButtonGroup>
    </>
  );
};

const MoviePageControllerBar = ({ suggestedGenre }) => <ResultsTitle>Films By {suggestedGenre} Genre</ResultsTitle>;

const ControllerBar = ({ total, sortBy, handleSortByChange, suggestedGenre, mode }) => {
  return (
    <ControllerBarStyled>
      {mode === 'movie' ? (
        <MoviePageControllerBar suggestedGenre={suggestedGenre} />
      ) : (
        <MainPageControllerBar total={total} sortBy={sortBy} handleSortByChange={handleSortByChange} />
      )}
    </ControllerBarStyled>
  );
};

ControllerBar.propTypes = {
  total: PropTypes.number,
  sortBy: PropTypes.string,
  handleSortByChange: PropTypes.func,
  suggestedGenre: PropTypes.string,
  mode: PropTypes.string,
};

MoviePageControllerBar.propTypes = {
  suggestedGenre: PropTypes.string,
};

MainPageControllerBar.propTypes = {
  total: PropTypes.number,
  sortBy: PropTypes.string,
  handleSortByChange: PropTypes.func,
};

export default ControllerBar;
export { ControllerBarStyled };
