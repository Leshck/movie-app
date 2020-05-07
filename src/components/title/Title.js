import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const TitleStyled = styled.h1`
  text-transform: uppercase;
  color: ${colors.WHITE};
`;

const Title = ({ children }) => <TitleStyled>{children}</TitleStyled>;

export default Title;
