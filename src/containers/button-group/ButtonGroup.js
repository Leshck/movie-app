import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
      >
        {value}
      </ButtonSwitcher>
    ))}
  </ButtonGroupStyled>
);

ButtonGroup.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
  activeBtn: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonGroup;
export { ButtonGroupStyled };
