import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Logo from '../logo/Logo';

const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${colors.GREY_1};
`;

const Footer = () => (
  <FooterStyled>
    <Logo />
  </FooterStyled>
);

export default Footer;
