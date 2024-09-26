import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ScreenContainer} from '../../components';
import {useNavigation} from '../../hooks';
import {RouteKey} from '../../navigator';

export const FilmScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenContainer style={styles.container}>
      <Text>FilmScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteKey.BookTicketScreen);
        }}>
        <Text>Go to Book Ticket screen</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
