import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlexGap from './';

export default {
  component: FlexGap,
  title: 'FlexGap',
} as ComponentMeta<typeof FlexGap>

const Template: ComponentStory<typeof FlexGap> = () => <FlexGap />

export const Default = Template.bind({});