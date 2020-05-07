import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import ButtonGroup from '../button-group/ButtonGroup';

const ControllerBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.GREY_0};
  justify-content: flex-end;
  padding: 0 150px;
`;

const ControllerBar = () => {
  const [sortBy, setSortBy] = useState('release date');
  return (
    <ControllerBarStyled>
      <ButtonGroup
        title="Sort by"
        values={['release date', 'rating']}
        activeBtn={sortBy}
        onClick={setSortBy}
      ></ButtonGroup>
    </ControllerBarStyled>
  );
};

export default ControllerBar;
