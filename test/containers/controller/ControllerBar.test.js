import 'jest-styled-components';
import * as router from 'react-router-dom';
import React from 'react';
import { shallow } from 'enzyme';
import ControllerBar, { ControllerBarStyled } from '../../../src/containers/controller/ControllerBar';

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(),
}));

describe('ControllerBarStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<ControllerBarStyled />);
    expect(component).toMatchSnapshot();
  });
});

describe('ControllerBar', () => {
  test('should be rendered correctly for movie page', () => {
    router.useRouteMatch.mockImplementation(() => true);
    const component = shallow(<ControllerBar />);
    expect(component).toMatchSnapshot();
  });

  test('should be rendered correctly for main page', () => {
    router.useRouteMatch.mockImplementation(() => false);
    const component = shallow(<ControllerBar />);
    expect(component).toMatchSnapshot();
  });
});
