import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {IMovie} from '../../types';

interface MovieState {
  movies: Record<string, IMovie> | undefined;
}

const initialState = {
  movies: undefined,
} satisfies MovieState as MovieState;

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Record<string, IMovie>>) => {
      state.movies = action.payload;
    },
    toggleFavoriteMovie: (state, action: PayloadAction<string>) => {
      handleMovieToggle(state, action.payload, movie => {
        movie.isFavorite = !movie.isFavorite;
      });
    },
    toggleBookMovie: (state, action: PayloadAction<string>) => {
      handleMovieToggle(state, action.payload, movie => {
        movie.booked = !movie.booked;
      });
    },
  },
});

const handleMovieToggle = (
  state: MovieState,
  movieId: string,
  toggleAction: (movie: IMovie) => void,
) => {
  if (!state.movies) {
    console.error('Movies list is undefined or null');
    return;
  }

  const movie = state.movies[movieId];
  if (!movie) {
    console.error(`Movie with id ${movieId} not found`);
    return;
  }
  toggleAction(movie);
};

export const {toggleFavoriteMovie, setMovies, toggleBookMovie} =
  movieSlice.actions;
export default movieSlice;
