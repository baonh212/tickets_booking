import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppNavigator} from './navigator';

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
