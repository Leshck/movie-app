import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const Footer = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.GREY_1};
`;

export default class FooterComponent extends React.Component {
  render() {
    return <Footer />;
  }
}
