import React, { FC } from 'react';
import styled from 'styled-components';

import { Button } from './index';

export default {
  title: 'Common / Button',
  argTypes: {
    icon: {
      control: 'text',
      defaultValue: 'M14 10h7v4h-7v7h-4v-7H3v-4h7V3h4z',
    },
    text: {
      control: 'text',
      defaultValue: 'Text',
    },
    light: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  > * {
    margin-bottom: 20px;
  }
`;

export const Default: FC<{
  icon?: string;
  text?: string;
  light?: boolean;
}> = ({ text, icon, light }) => (
  <FlexCol>
    <div>
      <Button icon={icon} light={light}>
        {text}
      </Button>
    </div>
    <div>
      <div>As Link:</div>
      <Button icon={icon} light={light} asLink href={'/'} target={'_blank'}>
        {text}
      </Button>
    </div>
  </FlexCol>
);
