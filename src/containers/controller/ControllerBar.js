import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
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

const MainPageControllerBar = () => {
  const [sortBy, setSortBy] = useState('release date');
  return (
    <>
      <ResultsTitle>7 movie found</ResultsTitle>
      <ButtonGroup
        title="Sort by"
        values={['release date', 'rating']}
        activeBtn={sortBy}
        onClick={setSortBy}
      ></ButtonGroup>
    </>
  );
};

const MoviePageControllerBar = () => <ResultsTitle>Films By Drama Genre</ResultsTitle>;

const ControllerBar = () => {
  const match = useRouteMatch('/movie');
  return <ControllerBarStyled>{match ? <MoviePageControllerBar /> : <MainPageControllerBar />}</ControllerBarStyled>;
};

ControllerBar.propTypes = {
  match: PropTypes.object,
};

export default ControllerBar;
