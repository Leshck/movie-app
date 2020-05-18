import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import ResultsTitle from '../../../src/components/results-title/ResultsTitle';

describe('ResultsTitle ', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<ResultsTitle />);
    expect(component).toMatchSnapshot();
  });
});
