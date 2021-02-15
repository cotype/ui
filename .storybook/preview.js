import { addDecorator, getStorybook } from '@storybook/react';
import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import BaseStyle from '../src/BaseStyle';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: 'fullscreen',
};

addDecorator((Story) => (
  <>
    <BaseStyle />
    <Story />
  </>
));

export { getStorybook };
