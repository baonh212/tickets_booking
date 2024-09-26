import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <Text>MainLayout</Text>
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
