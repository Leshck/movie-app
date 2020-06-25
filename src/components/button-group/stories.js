import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ButtonSwitcher from './ButtonSwitcher';

export default {
  title: 'ButtonSwitcher',
  component: ButtonSwitcher,
  decorators: [withKnobs],
};

export const DefaultButtonSwitcher = () => (
  <ButtonSwitcher active left>
    Text default
  </ButtonSwitcher>
);
