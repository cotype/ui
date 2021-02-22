import { FC } from 'react';
import styled from 'styled-components/macro';

const colors = {
  grey: '#aaa',
  yellow: '#dfda00',
  green: '#51c633',
  red: '#f96054',
};

type P = {
  color: keyof typeof colors;
};

export const StatusLight: FC<P> = styled.div<P>`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  margin: 0 5px;
  display: inline-block;
  vertical-align: middle;
  background-color: ${(p) => colors[p.color || 'grey']};
`;
