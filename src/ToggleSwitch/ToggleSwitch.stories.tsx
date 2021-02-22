import React, { FC } from 'react';
import styled from 'styled-components';
import { ToggleSwitch } from './index';

export default {
  title: 'Common / ToggleSwitch',
  argTypes: {
    isOn: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
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

export const Default: FC<{ isOn: boolean; disabled: boolean }> = ({
  isOn,
  disabled,
}) => (
  <FlexCol>
    <div>
      <ToggleSwitch on={isOn} disabled={disabled} />
    </div>
  </FlexCol>
);
