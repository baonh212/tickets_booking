import {useAppDispatch} from '../hooks.ts';
import {generateMovies} from '../../utils';
import {
  setMovies,
  toggleBookMovie,
  toggleFavoriteMovie,
} from '../../redux/slices';
import {useCallback, useEffect} from 'react';

export const useMovies = () => {
  const dispatch = useAppDispatch();

  const handleToggleFavorite = useCallback((id: string) => {
    dispatch(toggleFavoriteMovie(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBookMovie = useCallback((id: string) => {
    dispatch(toggleBookMovie(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handleToggleFavorite,
    handleBookMovie,
  };
};

export const useGetMovies = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const movieData = generateMovies(1000);
    dispatch(setMovies(movieData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
