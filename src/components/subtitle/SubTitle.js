import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const SubTitleStyled = styled.h4`
  text-transform: uppercase;
  color: ${colors.WHITE};
  margin-right: 10px;
`;

const SubTitle = ({ children }) => <SubTitleStyled>{children}</SubTitleStyled>;

export default SubTitle;
