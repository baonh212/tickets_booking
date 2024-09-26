import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const ScreenContainer = ({
  children,
  style,
  ...rest
}: PropsWithChildren<ViewProps>) => (
  <View style={[styles.container, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
