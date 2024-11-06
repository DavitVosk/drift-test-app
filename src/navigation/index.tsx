import * as React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Connect from '@screens/Connects';

import {Routes, StackParamList} from './types';

const Stack = createStackNavigator<StackParamList>();

const AppNavigation = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Routes.Connect}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={Routes.Connect} component={Connect} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
