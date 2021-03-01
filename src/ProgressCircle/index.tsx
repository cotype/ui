import React, { FC } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
.circlePath{
  stroke: var(--primary-color);
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease 0s;
}
.circleTrail{
  stroke: #ddd;
}
.circleText{
  fill: var(--primary-color);
  font-size: 20px;
  dominant-baseline: middle;
  text-anchor: middle;
}
.circleBackground{
  fill: #ddd;
}
`;
const classes = {
  path: 'circlePath',
  trail: 'circleTrail',
  text: 'circleText',
  background: 'circleBackground',
  root: '',
};

type Props = {
  percentage: number;
  size?: number | string;
};
export const ProgressCircle: FC<Props> = ({ percentage, size = '100%' }) => {
  return (
    <>
      <GlobalStyle />
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        classes={classes}
        styles={{ root: { width: size } }}
      />
    </>
  );
};
