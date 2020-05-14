import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import Header, { HeaderStyled, BackgroundImage, LogoContainer } from '../../../src/containers/header/Header';

jest.mock('react-router-dom', () => ({
  useRouteMatch: () => true,
}));

describe('HeaderStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<HeaderStyled />);
    expect(component).toMatchSnapshot();
  });
});

describe('LogoContainer', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<LogoContainer />);
    expect(component).toMatchSnapshot();
  });
});

describe('BackgroundImage', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<BackgroundImage height={500} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Header', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
