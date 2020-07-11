import React from 'react';

import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductList from '../pages/ProductList';
import ProductOrders from '../pages/ProductOrders';
import FavoriteProducts from '../pages/FavoriteProducts';

const BottomTab = createBottomTabNavigator();

const DashboardBottom: React.FC = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#C72828',
        inactiveTintColor: '#B7B7CC',
        labelPosition: 'beside-icon',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <BottomTab.Screen
        component={ProductList}
        key="ProductList"
        name="ProductList"
        options={{
          title: 'Listagem',
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        component={ProductOrders}
        name="ProductOrders"
        key="ProductOrders"
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        component={FavoriteProducts}
        name="FavoriteProducts"
        key="FavoriteProducts"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default DashboardBottom;
