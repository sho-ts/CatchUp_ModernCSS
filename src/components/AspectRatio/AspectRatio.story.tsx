import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AspectRatio from './';

export default {
  component: AspectRatio,
  title: 'AspectRatio',
} as ComponentMeta<typeof AspectRatio>

const Template: ComponentStory<typeof AspectRatio> = () => <AspectRatio />

export const Default = Template.bind({});