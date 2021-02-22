import React, { FC } from 'react';
import styled from 'styled-components';
import { PopoverMenu, PopoverMenuItem, PopoverMenuMenu } from './index';
import { Align, Position } from 'react-tiny-popover';

export default {
  title: 'Common / PopoverMenu',
  argTypes: {
    position: {
      control: { type: 'select', options: ['left', 'right', 'top', 'bottom'] },
      defaultValue: 'bottom',
    },
    align: {
      control: { type: 'select', options: ['start', 'center', 'end'] },
      defaultValue: 'center',
    },
  },
};

const FlexCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  > * {
    margin-bottom: 20px;
  }
`;

export const Default: FC<{ position?: Position; align?: Align }> = ({
  position,
  align,
}) => (
  <FlexCol>
    <div>
      <PopoverMenu
        renderMenu={(close) => (
          <PopoverMenuMenu>
            <PopoverMenuItem onClick={close}>close this window</PopoverMenuItem>
            <PopoverMenuItem onClick={close}>and more...</PopoverMenuItem>
          </PopoverMenuMenu>
        )}
        position={position}
        align={align}
      >
        Popover this on Click
      </PopoverMenu>
    </div>
  </FlexCol>
);
