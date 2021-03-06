import React, { FC } from 'react';
import styled from 'styled-components';

type P = {
  active: boolean;
  disabled?: boolean;
};

const Track = styled.div<P>`
  width: 44px;
  height: 22px;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 11px;
  cursor: ${(p: P) => (!p.disabled ? 'pointer' : 'auto')};
  display: inline-block;
  background: ${(p: P) =>
    p.active
      ? !p.disabled
        ? 'var(--primary-color)'
        : 'rgba(0, 0, 0, 0.25)'
      : '#ccc'};
`;

const Knob = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: all 0.2s ease-in-out;
  transform: translateX(${(p: P) => (p.active ? '22px' : 0)});
`;

type Props = {
  on: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
export const ToggleSwitch: FC<Props> = ({ on, onClick, disabled }: Props) => (
  <Track active={on} onClick={onClick} disabled={disabled}>
    <Knob active={on} />
  </Track>
);
