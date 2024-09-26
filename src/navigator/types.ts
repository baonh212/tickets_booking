import {RouteKey} from './RouteKey.ts';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type AppStackParamList = {
  [RouteKey.HomeTab]: undefined;
  [RouteKey.BookTicketScreen]: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>;

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
  [RouteKey.FilmScreen]: undefined;
  [RouteKey.FavoriteFilmScreen]: undefined;
  [RouteKey.BookingFilmScreen]: undefined;
};
