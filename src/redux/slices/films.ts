import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

interface FilmState {
  value: number;
}

const initialState = {value: 0} satisfies FilmState as FilmState;

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = filmSlice.actions;
export default filmSlice;
