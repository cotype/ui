import React, { FC } from 'react';
import styled from 'styled-components';
import { StatusLight } from './index';

export default {
  title: 'Common / StatusLight',
  argTypes: {
    color: {
      control: { type: 'select', options: ['grey', 'yellow', 'green', 'red'] },
      defaultValue: 'red',
    },
  },
};

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;

export const Default: FC<{ color: 'grey' | 'yellow' | 'green' | 'red' }> = ({
  color,
}) => (
  <FlexCol>
    <div>
      <StatusLight color={color} />
    </div>
  </FlexCol>
);
