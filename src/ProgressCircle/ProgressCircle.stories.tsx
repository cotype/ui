import React, { FC } from 'react';
import { ProgressCircle } from './index';

export default {
  title: 'Common / ProgressCircle',
  argTypes: {
    percentage: {
      control: { type: 'number' },
      defaultValue: 50,
    },
  },
};

export const Default: FC<{ percentage: number }> = ({ percentage }) => (
  <ProgressCircle percentage={percentage} size={'100px'} />
);
