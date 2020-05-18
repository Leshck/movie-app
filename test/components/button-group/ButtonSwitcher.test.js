import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import ButtonSwitcher from '../../../src/components/button-group/ButtonSwitcher';

describe('Button switcher', () => {
  test('should be rendered correctly when active left', () => {
    const component = shallow(
      <ButtonSwitcher key="title1" left={true} right={false} active={true}>
        title1
      </ButtonSwitcher>,
    );
    expect(component).toMatchSnapshot();
  });

  test('should be rendered correctly when inactive right', () => {
    const component = shallow(
      <ButtonSwitcher key="title2" left={false} right={true} active={false}>
        title2
      </ButtonSwitcher>,
    );
    expect(component).toMatchSnapshot();
  });
});
