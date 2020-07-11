import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardBottomRoutes from './tab.routes';

import Home from '../pages/Home';
import FoodDetails from '../pages/FoodDetails';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen component={Home} name="Home" key="Home" />
          <Stack.Screen
            component={DashboardBottomRoutes}
            name="DashboardBottomRoutes"
          />
          <Stack.Screen component={FoodDetails} name="Details" key="Details" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
