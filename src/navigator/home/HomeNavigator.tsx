import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteKey} from '../RouteKey.ts';
import {BookingFilmScreen, FavoriteFilmScreen, FilmScreen} from '../../screens';
import {HomeNavigatorParamList} from '../types.ts';

const HomeTab = createBottomTabNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name={RouteKey.FilmScreen} component={FilmScreen} />
      <HomeTab.Screen
        name={RouteKey.FavoriteFilmScreen}
        component={FavoriteFilmScreen}
      />
      <HomeTab.Screen
        name={RouteKey.BookingFilmScreen}
        component={BookingFilmScreen}
      />
    </HomeTab.Navigator>
  );
};
