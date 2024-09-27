import React from 'react';
import type {TextProps, TextStyle} from 'react-native';
import {StyleSheet, Text as RNText} from 'react-native';

interface IText extends TextProps {
  color?: TextStyle['color'];
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
}

export const Text = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...rest
}: IText) => {
  return (
    <RNText
      style={StyleSheet.flatten([
        style,
        {
          fontSize: fontSize ?? 16,
          fontWeight: fontWeight ?? 'normal',
          color: color ?? '#000',
        },
      ])}
      {...rest}>
      {children}
    </RNText>
  );
};
