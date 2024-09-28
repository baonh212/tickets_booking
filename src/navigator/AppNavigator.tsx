import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteKey} from './RouteKey';
import {BookTicketScreen} from '../screens';
import {HomeNavigator} from './home';
import {AppStackParamList} from './types.ts';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name={RouteKey.HomeTab}
          component={HomeNavigator}
        />
        <AppStack.Screen
          name={RouteKey.BookTicketScreen}
          component={BookTicketScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
