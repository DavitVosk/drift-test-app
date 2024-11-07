import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Connect from '@src/screens/Connect';
import Details from '@src/screens/Details';

import {Routes, StackParamList} from './types';

const Stack = createStackNavigator<StackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Connect}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Connect} component={Connect} />
        <Stack.Screen name={Routes.Details} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
