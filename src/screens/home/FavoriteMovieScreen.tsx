import React, {useCallback} from 'react';
import {IMovie} from '../../types';
import {MoviesList} from './components';
import {ScreenContainer} from '../../components';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getAppFavoriteMovies} from '../../redux/selectors';
import {RouteKey} from '../../navigator';
import {useMovies, useNavigation} from '../../hooks';

export const FavoriteMovieScreen = () => {
  const navigation = useNavigation();
  const favoriteMovies = useAppSelector(getAppFavoriteMovies);
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
        data={Object.values(favoriteMovies)}
        onPressBookTicket={handleToggleWatched}
        onToggleFavorite={handleToggleFavorite}
      />
    </ScreenContainer>
  );
};
