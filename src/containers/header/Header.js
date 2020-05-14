import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import img from '../../static/header-background.jpg';
import HeaderContentSearch from '../header-content-search/HeaderContentSearch';
import HeaderContentMovie from '../header-content-movie/HeaderContentMovie';
import { Logo } from '../../components';

const HeaderStyled = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  background-image: url(${img});
  width: 100%;
  height: ${({ height }) => height}px;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  background-size: 100% 400px;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 60px;
  z-index: 9999;
`;

const Header = () => {
  const match = useRouteMatch('/movie');
  const height = match ? 600 : 400;
  return (
    <HeaderStyled height={height}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <BackgroundImage height={height} />
      {match ? <HeaderContentMovie height={height} /> : <HeaderContentSearch height={height} />}
    </HeaderStyled>
  );
};

Header.propTypes = {
  match: PropTypes.object,
};

export default Header;
export { HeaderStyled, BackgroundImage, LogoContainer };
