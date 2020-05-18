import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../../../src/containers/error-boundary/ErrorBoundary';

const Something = () => {
  return null;
};

describe('ErrorBoundary', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<ErrorBoundary />);
    expect(component).toMatchSnapshot();
  });

  test('should be rendered with error', () => {
    const component = shallow(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>,
    );
    const error = new Error();
    component.find(Something).simulateError(error);
    expect(component.state()).toMatchObject({ hasError: true });
  });
});
