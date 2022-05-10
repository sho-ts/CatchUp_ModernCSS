import React from 'react';
import 'destyle.css';
import { addDecorator } from '@storybook/react';
import { Global } from '@emotion/react';
import { variables } from '../src/assets/css/variables';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => (
  <>
    <Global styles={variables} />
    {story()}
  </>
));