import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
const LogoPart1 = styled.h3`
  margin: 0;
  color: ${colors.PINK};
`;
const LogoPart2 = styled.h3`
  margin: 0;
  color: ${colors.PINK};
  font-weight: 300;
`;

const Logo = () => (
  <LogoStyled>
    <LogoPart1>netflix</LogoPart1>
    <LogoPart2>roulette</LogoPart2>
  </LogoStyled>
);

export default Logo;
