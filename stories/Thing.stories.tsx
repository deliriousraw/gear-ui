import React from 'react';
import { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Welcome',
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


