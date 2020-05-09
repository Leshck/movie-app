import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const ResultsTitleStyled = styled.h4`
  font-weight: 5000;
  color: ${colors.WHITE};
  margin-right: 10px;
`;

const ResultsTitle = ({ children }) => <ResultsTitleStyled>{children}</ResultsTitleStyled>;

export default ResultsTitle;
