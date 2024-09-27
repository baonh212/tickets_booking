import React from 'react';
import type {TextProps} from 'react-native';
import {Text as RNText} from 'react-native';

export const Text = ({children, ...rest}: TextProps) => {
  return <RNText {...rest}>{children}</RNText>;
};
