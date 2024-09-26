import {combineSlices} from '@reduxjs/toolkit';
import filmSlice from './films.ts';

export const rootReducer = combineSlices(filmSlice);
