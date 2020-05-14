import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import SubTitle from '../../../src/components/subtitle/SubTitle';

describe('SubTitle ', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<SubTitle>Any subtitle</SubTitle>);
    expect(component).toMatchSnapshot();
  });
});
