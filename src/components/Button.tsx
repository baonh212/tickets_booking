import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export const Button = ({children, style, ...rest}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
