import React from 'react';
import {MoviesList} from './components';
import {ScreenContainer} from '../../components';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getAppBookedMovies} from '../../redux/selectors';
import {useMovies} from '../../hooks';

export const BookedMovieScreen = () => {
  const bookedMovies = useAppSelector(getAppBookedMovies);
  const {handleToggleFavorite} = useMovies();

  return (
    <ScreenContainer>
      <MoviesList
        data={Object.values(bookedMovies)}
        onToggleFavorite={handleToggleFavorite}
      />
    </ScreenContainer>
  );
};
