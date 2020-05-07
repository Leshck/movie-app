import React from 'react';
import styled from 'styled-components';
import { SubTitle, ButtonSwitcher } from '../../components';

const ButtonGroupStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonGroup = ({ title, values, activeBtn, onClick }) => (
  <ButtonGroupStyled>
    <SubTitle>{title}</SubTitle>
    {values.map((value, i, array) => (
      <ButtonSwitcher
        key={value}
        left={!i}
        right={i === array.length - 1}
        onClick={() => onClick(value)}
        active={activeBtn === value}
        title={value}
      />
    ))}
  </ButtonGroupStyled>
);

export default ButtonGroup;
