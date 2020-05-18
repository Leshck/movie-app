import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from '../../../src/components/search/SearchInput';

describe('SearchInput ', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<SearchInput />);
    expect(component).toMatchSnapshot();
  });
});
