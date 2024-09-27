import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteKey} from '../RouteKey.ts';
import {
  BookingMovieScreen,
  FavoriteMovieScreen,
  MovieScreen,
} from '../../screens';
import {HomeNavigatorParamList} from '../types.ts';

const HomeTab = createBottomTabNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name={RouteKey.MovieScreen} component={MovieScreen} />
      <HomeTab.Screen
        name={RouteKey.FavoriteMovieScreen}
        component={FavoriteMovieScreen}
      />
      <HomeTab.Screen
        name={RouteKey.BookingMovieScreen}
        component={BookingMovieScreen}
      />
    </HomeTab.Navigator>
  );
};
