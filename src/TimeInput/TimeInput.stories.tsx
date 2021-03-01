import React, { FC } from 'react';
import { TimeInput } from './index';

export default {
  title: 'Common / TimeInput',
  argTypes: {
    value: {
      control: { type: 'text' },
      defaultValue: '10:15',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Placeholder',
    },
  },
};

export const Default: FC<{ value: string; placeholder: string }> = ({
  value,
  placeholder,
}) => {
  return <TimeInput value={value} placeholder={placeholder} />;
};
