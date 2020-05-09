import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const ButtonSwitcherStyled = styled.button`
  background-color: ${(props) => (props.active ? `${colors.PINK}` : `${colors.GREY_1}`)};
  border: none;
  ${(props) => (props.left ? 'border-radius: 4px 0 0 4px;' : '')};
  ${(props) => (props.right ? 'border-radius: 0 4px 4px 0;' : '')};
  text-transform: uppercase;
  color: ${colors.WHITE};
  text-align: center;
  font-size: 12px;
  padding: 10px 20px;
  max-height: 40px;
`;

const ButtonSwitcher = ({ title, active, left, right, onClick }) => (
  <ButtonSwitcherStyled active={active} left={left} right={right} onClick={onClick}>
    {title}
  </ButtonSwitcherStyled>
);

export default ButtonSwitcher;
