import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: number };
  DashboardBottomRoutes: undefined;
};

export type TabParamList = {
  ProductList: undefined;
  ProductOrders: undefined;
  FavoriteProducts: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Home'>,
  BottomTabNavigationProp<TabParamList>
>;

export type ProductListScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'ProductList'>,
  StackNavigationProp<RootStackParamList>
>;

export type ProductDetailstScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Details'>,
  BottomTabNavigationProp<TabParamList>
>;

export type PropsDetails = StackScreenProps<RootStackParamList, 'Details'>;
