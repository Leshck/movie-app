import React from 'react';
import { HeaderContainer, MainContainer } from '../containers';
import { FooterComponent } from '../components';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderContainer />
        <MainContainer />
        <FooterComponent />
      </Wrapper>
    );
  }
}
