import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const EmptyStateStyled = styled.h1`
  color: ${colors.WHITE};
`;

const EmptyState = () => <EmptyStateStyled>No films found</EmptyStateStyled>;

export default EmptyState;
