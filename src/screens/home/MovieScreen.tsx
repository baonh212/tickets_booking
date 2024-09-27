import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components';
import {useGetMovies, useMovies, useNavigation} from '../../hooks';
import {RouteKey} from '../../navigator';
import {IMovie} from '../../types';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getAppMovies} from '../../redux/selectors';
import {MoviesList} from './components';

export const MovieScreen = () => {
  useGetMovies();

  const navigation = useNavigation();
  const movies = useAppSelector(getAppMovies);
  const {handleToggleFavorite} = useMovies();

  const handleToggleWatched = useCallback((movie: IMovie) => {
    navigation.navigate(RouteKey.BookTicketScreen, {
      movie,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenContainer>
      <MoviesList
        data={Object.values(movies)}
        onPressBookTicket={handleToggleWatched}
        onToggleFavorite={handleToggleFavorite}
      />
    </ScreenContainer>
  );
};
