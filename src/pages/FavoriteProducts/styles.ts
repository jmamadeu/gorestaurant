import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
  padding-bottom: 90px;
`;

export const Header = styled.View`
  height: 130px;
  background: #c72828;
  padding: 24px;
  padding-top: ${Constants.statusBarHeight + 5}px;
`;

export const ContentHeader = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const BackIcon = styled(Feather)`
  font-size: 24px;
  color: #ffb84d;
`;

export const HeaderText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const FoodContainer = styled.View`
  padding: 24px;
  margin-top: -70px;
`;

export const FoodItem = styled.View`
  flex-direction: row;
  height: 100px;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const FoodImageContainer = styled.View`
  background: #ffb84d;
  padding: 10px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const FoodImage = styled.Image`
  height: 80px;
  width: 80px;
  /* background: #c27808; */
`;

export const FoodContentContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const FoodTitle = styled.Text`
  color: #3d3d4d;
  font-weight: bold;
  font-size: 15px;
`;

export const FoodDescription = styled.Text`
  color: #3d3d4d;
  font-size: 10px;
  margin-top: 5px;
  max-width: 180px;
`;

export const FoodPrice = styled.Text`
  color: #39b100;
  font-weight: bold;
  font-size: 18px;
  margin-top: 5px;
`;
