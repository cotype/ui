import React, { FC } from 'react';
import styled from 'styled-components';
import { baseStyleCss } from './index';

export default {
  title: 'Common / BaseStyle',
};

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  > * {
    margin-bottom: 20px;
  }
  textarea {
    width: 100%;
    height: 60vh;
    resize: vertical;
  }
`;

export const Default: FC<{
  icon?: string;
  text?: string;
  light?: boolean;
}> = ({ text, icon, light }) => (
  <FlexCol>
    <div>
      <div>BaseStyle:</div>
      <textarea readOnly>{baseStyleCss}</textarea>
    </div>
  </FlexCol>
);
