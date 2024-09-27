import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Image, ScreenContainer, Text} from '../../components';
import {useRoute} from '@react-navigation/native';
import {BookTicketScreenNavigationProps} from '../../navigator/types.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useMovies, useNavigation} from '../../hooks';
import {RouteKey} from '../../navigator';

export const BookTicketScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<BookTicketScreenNavigationProps['route']>();
  const {movie} = route.params;
  const {handleBookMovie} = useMovies();

  const onBookTicket = () => {
    handleBookMovie(movie.id);
    navigation.navigate(RouteKey.BookedMovieScreen);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <ScreenContainer style={styles.content}>
        <ScrollView>
          <Image source={{uri: movie.imageUrl}} style={styles.thumbnail} />
          <Text style={styles.title} fontSize={20}>
            {movie.title}
          </Text>
          <Text color={'gray'}>{movie.description}</Text>
        </ScrollView>
      </ScreenContainer>
      <Button style={styles.button} onPress={onBookTicket}>
        <Text fontWeight={'bold'} color={'white'}>
          Đặt Vé
        </Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  thumbnail: {
    width: 'auto',
    height: 300,
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 24,
  },
});
