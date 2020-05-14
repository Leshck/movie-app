import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import ControllerBar, { ControllerBarStyled } from '../../../src/containers/controller/ControllerBar';

jest.mock('react-router-dom', () => ({
  useRouteMatch: () => true,
}));

describe('ControllerBarStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<ControllerBarStyled />);
    expect(component).toMatchSnapshot();
  });
});

describe('ControllerBar', () => {
  test('should be rendered correctly for movie page', () => {
    const component = shallow(<ControllerBar />);
    expect(component).toMatchSnapshot();
  });
});
