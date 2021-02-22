import { addDecorator, getStorybook } from '@storybook/react';
import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {BaseStyle} from "../src";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

addDecorator((Story) => (
  <>
    <BaseStyle />
    <Story />
  </>
));

export { getStorybook };
