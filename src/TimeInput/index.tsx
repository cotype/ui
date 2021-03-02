import React, { Component, ReactElement } from 'react';
import { css } from 'styled-components';

import { SimpleInput } from '../SimpleElements';

const timeInputClass = css`
  width: 5em;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;

const regexp = /^\d{0,2}?:?\d{0,2}$/;

const isValidHour = (h: number): boolean =>
  Number.isInteger(h) && h >= 0 && h < 24;

const isValidMinutes = (m: number): boolean =>
  (Number.isInteger(m) && m >= 0 && m < 60) || Number.isNaN(m);

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

type State = {
  value: string;
};

export class TimeInput extends Component<Props, State> {
  state = {
    value: this.props.value || '00:00',
  };

  lastVal = '';

  isValid(val: string): boolean {
    if (!regexp.test(val)) return false;

    const [hh, mm] = val.split(':');
    const hours = Number(hh);
    const minutes = Number(mm);

    if (!isValidHour(hours) || !isValidMinutes(minutes)) {
      return false;
    }

    // first mm digit must be <= 5
    if (minutes < 10 && Number(mm[0]) > 5) return false;

    return true;
  }

  onChange(value: string): void {
    if (value === this.state.value) return;
    if (this.isValid(value)) {
      if (
        value.length === 2 &&
        this.lastVal.length !== 3 &&
        !value.includes(':')
      ) {
        value += ':';
      }

      if (value.length === 2 && this.lastVal.length === 3) {
        value = value.slice(0, 1);
      }

      if (value.length > 5) {
        return;
      }

      this.lastVal = value;
      this.setState({ value });

      if (value.length === 5) {
        const { onChange } = this.props;
        if (onChange) onChange(value);
      }
    }
  }

  render(): ReactElement {
    return (
      <SimpleInput
        css={timeInputClass}
        type="tel"
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={(e) => this.onChange(e.target.value)}
      />
    );
  }
}
