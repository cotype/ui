import 'react-day-picker/lib/style.css';
import 'moment/locale/de';

import React, { Component, ReactElement } from 'react';
import { DayModifiers } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils from 'react-day-picker/moment';
import styled from 'styled-components';

import { inputClass } from '../SimpleElements';

export const FORMAT = 'L';

const Wrapper = styled('div')`
  .day-picker-container {
    position: relative;
    & > div {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      position: absolute;
      z-index: 2;
      background: white;
    }
    & input {
      ${inputClass}
      width: auto;
      font-feature-settings: 'tnum';
      font-variant-numeric: tabular-nums;
    }
  }
`;

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (date: string) => void;
};

export class DatePicker extends Component<Props> {
  format(value: string): string {
    return value
      ? `${MomentLocaleUtils.formatDate(new Date(value), FORMAT, 'de')}`
      : '';
  }

  handleChange = (
    selectedDay: Date,
    _modifiers: DayModifiers,
    dayPickerInput: DayPickerInput,
  ): void => {
    const { onChange } = this.props;
    if (onChange) {
      const date = selectedDay
        ? selectedDay.toISOString()
        : dayPickerInput.getInput().value;
      const setMidNight = new Date(date);
      setMidNight.setUTCHours(0, 0, 0, 0);
      onChange(setMidNight.toISOString());
    }
  };

  render(): ReactElement {
    const { value = '', placeholder } = this.props;
    return (
      <Wrapper>
        <DayPickerInput
          formatDate={MomentLocaleUtils.formatDate}
          parseDate={MomentLocaleUtils.parseDate}
          placeholder={placeholder || 'DD.MM.YYYY'}
          classNames={{
            container: 'day-picker-container',
            overlay: '',
            overlayWrapper: '',
          }}
          onDayChange={this.handleChange}
          format={[FORMAT, 'l', 'LL', 'll']}
          dayPickerProps={{
            locale: 'de',
            localeUtils: MomentLocaleUtils,
          }}
          value={this.format(value)}
        />
      </Wrapper>
    );
  }
}
