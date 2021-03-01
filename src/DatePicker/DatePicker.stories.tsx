import React, { FC } from 'react';
import { DatePicker } from './index';

export default {
  title: 'Common / DatePicker',
  argTypes: {
    value: {
      control: { type: 'text' },
      defaultValue: '10.01.2021',
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
  return <DatePicker value={value} placeholder={placeholder} />;
};
