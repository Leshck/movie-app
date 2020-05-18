import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../../src/components/title/Title';

describe('Title ', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<Title>Any title</Title>);
    expect(component).toMatchSnapshot();
  });
});
