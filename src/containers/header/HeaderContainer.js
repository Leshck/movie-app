import React from 'react';
import styled from 'styled-components';
import img from '../../static/header-background.jpg';
import { Title } from '../../components';
import SearchBar from '../search/SearchBar';
import ButtonGroup from '../button-group/ButtonGroup';

const Header = styled.div`
  width: 100%;
  height: 400px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  background-image: url(${img});
  width: 100%;
  height: 400px;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  background-size: 100% 400px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 400px;
  z-index: 9999;
  padding: 0 150px;
  box-sizing: border-box;
`;

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: 'title',
    };
  }
  handleChange = (value) => this.setState({ searchBy: value });

  render() {
    return (
      <Header>
        <BackgroundImage></BackgroundImage>
        <Content>
          <Title>Find your movie</Title>
          <SearchBar></SearchBar>
          <ButtonGroup
            title="Search By"
            values={['title', 'genre']}
            activeBtn={this.state.searchBy}
            onClick={this.handleChange}
          ></ButtonGroup>
        </Content>
      </Header>
    );
  }
}
