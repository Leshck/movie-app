import 'jest-styled-components';
import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonGroup, { ButtonGroupStyled } from '../../../src/containers/button-group/ButtonGroup';
import { ButtonSwitcher, SubTitle } from '../../../src/components';

describe('ButtonGroupStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<ButtonGroupStyled />);
    expect(component).toMatchSnapshot();
  });
});

describe('ButtonGroup', () => {
  const onClick = jest.fn();
  test('should be created with two buttons', () => {
    const component = mount(
      <ButtonGroup title="test title" values={['btn1', 'btn2']} activeBtn="btn1" onClick={onClick} />,
    );
    expect(component.find(ButtonSwitcher).length).toBe(2);

    expect(component.find(ButtonSwitcher).at(0).props()).toMatchObject({
      left: true,
      right: false,
      active: true,
      children: 'btn1',
    });

    expect(component.find(ButtonSwitcher).at(1).props()).toMatchObject({
      left: false,
      right: true,
      active: false,
      children: 'btn2',
    });
    component.find(ButtonSwitcher).at(1).simulate('click');
    expect(onClick).toHaveBeenCalledWith('btn2');

    expect(component.find(SubTitle).props()).toMatchObject({
      children: 'test title',
    });
  });
});
