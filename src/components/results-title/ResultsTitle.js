import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../constants/colors';

const ResultsTitleStyled = styled.h4`
  font-weight: 900;
  color: ${colors.WHITE};
  margin-right: 10px;
`;

const ResultsTitle = ({ children }) => <ResultsTitleStyled>{children}</ResultsTitleStyled>;

ResultsTitle.propTypes = {
  children: PropTypes.string,
};

export default ResultsTitle;
