import React, { FC } from 'react';
import styled from 'styled-components';
import { icons, Icon, paths } from './index';

export default {
  title: 'Common / Icon',
  argTypes: {
    path: {
      control: 'text',
      defaultValue: 'M14 10h7v4h-7v7h-4v-7H3v-4h7V3h4z',
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
const IconBox = styled.div`
  text-align: center;
  > *:first-child {
    font-size: 8px;
  }
  padding: 8px;
  border: 1px solid grey;
`;
const PathBox = styled.div`
  text-align: center;
  > *:last-child {
    font-size: 8px;
    margin-left: 8px;
  }
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid grey;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Default: FC<{ path: string }> = ({ path }) => (
  <FlexCol>
    <div>
      IconBox(Icon): <Icon path={path} />
    </div>

    <div>Icons(icons):</div>
    <FlexWrap>
      {Object.entries(icons).map(([key, El]) => {
        return (
          <IconBox>
            <div>{key}</div>
            <El />
          </IconBox>
        );
      })}
    </FlexWrap>
    <div>Paths(paths):</div>
    <div>
      {Object.entries(paths).map(([key, p]) => {
        return (
          <PathBox>
            <div>{key}</div>
            <div>{p}</div>
          </PathBox>
        );
      })}
    </div>
  </FlexCol>
);
