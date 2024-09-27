import React, {memo, useMemo} from 'react';

import {StyleSheet} from 'react-native';
import {Button, Column, Image, Row, Text} from '../../../components';
import {IMovie} from '../../../types';

interface IMovieItemProps {
  movie: IMovie;
  onPressBookTicket?: (movie: IMovie) => void;
  onToggleFavorite: (movieId: string) => void;
}

export const MovieItem = memo(
  ({movie, onPressBookTicket, onToggleFavorite}: IMovieItemProps) => {
    const favoriteButtonStyle = useMemo(() => {
      return {
        ...styles.favoriteButton,
        backgroundColor: movie.isFavorite ? 'red' : 'gray',
      };
    }, [movie.isFavorite]);

    return (
      <Row style={styles.container}>
        <Image
          source={{uri: movie.imageUrl, cache: 'force-cache'}}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <Column style={styles.details}>
          <Text fontSize={18}>{movie.title}</Text>
          <Text style={styles.description} color={'gray'} numberOfLines={1}>
            {movie.description}
          </Text>
          <Column>
            <Button
              disabled={movie.booked}
              style={movie.booked ? styles.watchedButton : styles.bookButton}
              onPress={() => !movie.booked && onPressBookTicket?.(movie)}>
              <Text style={styles.buttonText}>
                {movie.booked ? 'Đã Xem' : 'Đặt Vé'}
              </Text>
            </Button>
            <Button
              style={favoriteButtonStyle}
              onPress={() => onToggleFavorite(movie.id)}>
              <Text style={styles.buttonText}>Yêu Thích</Text>
            </Button>
          </Column>
        </Column>
      </Row>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.movie.isFavorite === nextProps.movie.isFavorite;
  },
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  description: {
    marginVertical: 10,
  },
  bookButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  watchedButton: {
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  favoriteButton: {
    padding: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 12,
  },
});
