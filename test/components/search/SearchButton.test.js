import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import SearchButton from '../../../src/components/search/SearchButton';

describe('SearchButton ', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<SearchButton>Search</SearchButton>);
    expect(component).toMatchSnapshot();
  });
});
