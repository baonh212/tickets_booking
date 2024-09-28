import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteKey} from '../RouteKey.ts';
import {
  BookedMovieScreen,
  FavoriteMovieScreen,
  MovieScreen,
} from '../../screens';
import {HomeNavigatorParamList} from '../types.ts';

const HomeTab = createBottomTabNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name={RouteKey.MovieScreen}
        component={MovieScreen}
        options={{
          tabBarTestID: RouteKey.MovieScreen,
        }}
      />
      <HomeTab.Screen
        name={RouteKey.FavoriteMovieScreen}
        component={FavoriteMovieScreen}
        options={{
          tabBarTestID: RouteKey.FavoriteMovieScreen,
        }}
      />
      <HomeTab.Screen
        name={RouteKey.BookedMovieScreen}
        component={BookedMovieScreen}
        options={{
          tabBarTestID: RouteKey.BookedMovieScreen,
        }}
      />
    </HomeTab.Navigator>
  );
};
