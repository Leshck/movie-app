import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../constants/colors';

const TitleStyled = styled.h1`
  text-transform: uppercase;
  color: ${colors.WHITE};
`;

const Title = ({ children }) => <TitleStyled>{children}</TitleStyled>;

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
