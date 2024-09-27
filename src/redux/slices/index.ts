import {combineSlices} from '@reduxjs/toolkit';
import movieSlice from './movies.ts';

export * from './movies';

export const rootReducer = combineSlices(movieSlice);
