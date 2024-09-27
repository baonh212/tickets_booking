import {RootState} from '../store.ts';
import {IMovie} from '../../types';

const emptyArray: IMovie[] = [];

const getAppMovies = (state: RootState) => {
  if (!state.movie.movies) {
    return emptyArray;
  }
  return state.movie.movies;
};

const getAppFavoriteMovies = (state: RootState) => {
  if (!state.movie.favoriteMovies) {
    return emptyArray;
  }
  return state.movie.favoriteMovies;
};

export {getAppMovies, getAppFavoriteMovies};
