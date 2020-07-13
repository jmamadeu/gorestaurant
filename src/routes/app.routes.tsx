import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from '../pages/Home';
import FoodDetails from '../pages/FoodDetails';
import DashboardBottomRoutes from './tab.routes';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen component={Home} name='Home' key='Home' />
          <Stack.Screen
            component={DashboardBottomRoutes}
            name='DashboardBottomRoutes'
          />
          <Stack.Screen component={FoodDetails} name='Details' key='Details' />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
