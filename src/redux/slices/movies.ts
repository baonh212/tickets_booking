import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {IMovie} from '../../types';

interface MovieState {
  movies: Record<string, IMovie> | undefined;
  favoriteMovies: Record<string, IMovie> | undefined;
}

const initialState = {
  movies: undefined,
  favoriteMovies: undefined,
} satisfies MovieState as MovieState;

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Record<string, IMovie>>) => {
      state.movies = action.payload;
    },
    toggleFavoriteMovie: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      if (!state.movies) {
        console.error('Movies list is undefined or null');
        return;
      }

      const movie = state.movies[id];

      if (!movie) {
        console.error(`Movie with id ${id} not found`);
        return;
      }

      movie.isFavorite = !movie.isFavorite;

      if (!state.favoriteMovies) {
        state.favoriteMovies = {};
      }
      if (movie.isFavorite) {
        state.favoriteMovies[id] = movie;
      } else {
        delete state.favoriteMovies[id];
      }
    },
  },
});

export const {toggleFavoriteMovie, setMovies} = movieSlice.actions;
export default movieSlice;
