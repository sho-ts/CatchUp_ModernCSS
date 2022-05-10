import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Is from './';

export default {
  component: Is,
  title: 'Is',
} as ComponentMeta<typeof Is>

const Template: ComponentStory<typeof Is> = () => <Is />

export const Default = Template.bind({});