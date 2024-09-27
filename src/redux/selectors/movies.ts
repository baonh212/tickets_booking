import {RootState} from '../store.ts';
import {IMovie} from '../../types';
import {createSelector} from '@reduxjs/toolkit';

const emptyArray: Record<string, IMovie> = {};

const getAppMovies = (state: RootState) => state.movie.movies || emptyArray;

const getAppFavoriteMovies = createSelector([getAppMovies], movies => {
  return Object.values(movies).filter(movie => movie.isFavorite);
});

const getAppBookedMovies = createSelector([getAppMovies], movies => {
  return Object.values(movies).filter(movie => movie.booked);
});

export {getAppMovies, getAppFavoriteMovies, getAppBookedMovies};
