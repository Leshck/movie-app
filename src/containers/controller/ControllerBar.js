import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import ButtonGroup from '../button-group/ButtonGroup';
import { ResultsTitle } from '../../components';
import { withRouter } from 'react-router-dom';

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

const ControllerBar = ({ match }) => {
  return (
    <ControllerBarStyled>
      {match.path.includes('movie') ? <MoviePageControllerBar /> : <MainPageControllerBar />}
    </ControllerBarStyled>
  );
};

export default withRouter(ControllerBar);
