import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import EmptyState from '../../../src/components/empty-state/EmptyState';

describe('EmptyState ', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<EmptyState>Empty state text</EmptyState>);
    expect(component).toMatchSnapshot();
  });
});
