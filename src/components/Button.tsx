import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Button = ({children, ...rest}: TouchableOpacityProps) => {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};
