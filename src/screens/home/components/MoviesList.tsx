import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {IMovie} from '../../../types';
import {MovieItem} from './MovieItem.tsx';

interface IMoviesList {
  data: IMovie[];
  onPressBookTicket: (movie: IMovie) => void;
  onToggleFavorite: (movieId: string) => void;
}

export const MoviesList = ({
  data,
  onPressBookTicket,
  onToggleFavorite,
}: IMoviesList) => {
  return (
    <FlatList<IMovie>
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <MovieItem
          movie={item}
          onPressBookTicket={onPressBookTicket}
          onToggleFavorite={onToggleFavorite}
        />
      )}
      contentContainerStyle={styles.content}
      initialNumToRender={20}
      maxToRenderPerBatch={20}
      windowSize={10}
      removeClippedSubviews={true}
      ListEmptyComponent={<ActivityIndicator size={'large'} />}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 24,
  },
});
