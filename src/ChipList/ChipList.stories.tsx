import React, { FC, useCallback, useState } from 'react';
import { ChipList } from './index';

export default {
  title: 'Common / ChipList',
  argTypes: {
    noColor: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export const Default: FC<{ noColor?: boolean }> = ({ noColor }) => {
  const [values, setValues] = useState<string[]>([]);
  const addValue = useCallback((add) => setValues((v) => [...v, add]), [
    setValues,
  ]);
  const removeValue = useCallback(
    (index) =>
      setValues((v) => {
        const arr = [...v];
        arr.splice(index, 1);
        return arr;
      }),
    [setValues],
  );
  return (
    <ChipList
      onAdd={addValue}
      onDelete={removeValue}
      values={values}
      noColor={noColor}
    />
  );
};
