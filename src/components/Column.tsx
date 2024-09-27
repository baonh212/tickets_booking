import React, {PropsWithChildren} from 'react';
import {View, ViewProps} from 'react-native';

export const Column = ({children, ...rest}: PropsWithChildren<ViewProps>) => {
  return <View {...rest}>{children}</View>;
};
