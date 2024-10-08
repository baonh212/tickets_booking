import {RouteKey} from './RouteKey.ts';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {IMovie} from '../types';

export type AppStackParamList = {
  [RouteKey.HomeTab]: undefined;
  [RouteKey.BookTicketScreen]: {movie: IMovie};
};

export type AppNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AppStackParamList>,
  NativeStackNavigationProp<HomeNavigatorParamList>
>;

export type AppRouteProp = RouteProp<
  AppStackParamList,
  keyof AppStackParamList
>;

export type HomeTabNavigationProps = NativeStackScreenProps<
  AppStackParamList,
  RouteKey.HomeTab
>;

export type BookTicketScreenNavigationProps = NativeStackScreenProps<
  AppStackParamList,
  RouteKey.BookTicketScreen
>;

export type HomeNavigatorParamList = {
  [RouteKey.MovieScreen]: undefined;
  [RouteKey.FavoriteMovieScreen]: undefined;
  [RouteKey.BookedMovieScreen]: undefined;
};
