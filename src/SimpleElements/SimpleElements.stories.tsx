import React, { FC } from 'react';
import styled from 'styled-components';

import {
  SimpleButton,
  SimpleError,
  SimpleField,
  SimpleInput,
  SimpleLabel,
} from './index';

export default {
  title: 'Common / SimpleElements',
};

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  > * {
    margin-bottom: 20px;
  }
`;

export const Default: FC = () => (
  <FlexCol>
    <div>
      <SimpleField>
        <SimpleLabel>SimpleLabel</SimpleLabel>
        <SimpleInput />
        <SimpleError>Error</SimpleError>
      </SimpleField>
    </div>
    <div>
      <SimpleButton>Button</SimpleButton>
    </div>
  </FlexCol>
);
