import React, { FC } from 'react';
import styled from 'styled-components';
import { ImageCircle } from './index';

export default {
  title: 'Common / ImageCircle',
  argTypes: {
    src: {
      control: 'text',
      defaultValue: 'example.png',
    },
    alt: {
      control: 'text',
      defaultValue: 'Test Text',
    },
    size: {
      control: 'number',
      defaultValue: 24,
    },
  },
};

export const Default: FC<{ src: string; alt: string; size: number }> = ({
  src,
  alt,
  size,
}) => <ImageCircle src={src} alt={alt} size={size} />;
