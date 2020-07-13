import styled from 'styled-components/native';

import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  height: 130px;
  background: #c72828;
  padding: 24px;
  padding-top: ${Constants.statusBarHeight + 5}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BackIcon = styled(Feather)`
  font-size: 24px;
  color: #ffb84d;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const RightIcon = styled(Feather)`
  font-size: 24px;
  color: #ffb84d;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const FoodThumbnailContainer = styled.View`
  border-radius: 8px;
  margin-top: -80px;
`;

export const FoodThumbnail = styled.View`
  background: #ffb84d;
  align-items: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const FoodImage = styled.Image`
  width: 280px;
  height: 110px;
  margin-top: 15px;
`;

export const FoodDescription = styled.View`
  background: #f0f0f5;
  padding: 20px;
  height: 150px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const FoodTitle = styled.Text`
  font-size: 20px;
  color: #3d3d4d;
  font-weight: bold;
`;

export const FoodDetail = styled.Text`
  font-size: 15px;
  color: #3d3d4d;
  line-height: 25px;
`;

export const FoodPrice = styled.Text`
  font-size: 24px;
  color: #6c6c80;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: #3d3d4d;
  margin-top: 10px;
  margin-bottom: 7px;
  font-size: 18px;
  font-weight: bold;
`;

export const AditionalContainer = styled.View`
  flex-direction: row;
  height: 30px;
  background: #f0f0f5;
  border-radius: 8px;
  justify-content: space-between;
  padding: 12px;
  align-items: center;
  margin-bottom: 5px;
`;

export const AditionalTitle = styled.Text`
  color: #6c6c80;
  font-size: 16px;
`;

export const Inputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #f0f0f5;
`;

export const LessButton = styled.TouchableOpacity``;

export const AmountText = styled.Text`
  margin-left: 25px;
`;

export const MoreButton = styled.TouchableOpacity`
  margin-left: 25px;
`;

export const TextAditional = styled.Text`
  color: #6c6c80;
  font-size: 16px;
`;

export const OrderContainer = styled.View`
  flex-direction: row;
  height: 30px;
  border-radius: 8px;
  justify-content: space-between;
  padding: 2px;
  align-items: center;
  margin-bottom: 5px;
`;

export const InputsTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #f0f0f5;
  padding: 7px;
  /* height: 30px; */
  border-radius: 8px;
`;

export const OrderPrice = styled.Text`
  color: #39b100;
  font-size: 20px;
  font-weight: bold;
`;

export const ConfirmButton = styled(RectButton)`
  flex-direction: row;
  height: 50px;
  background: #39b100;
  margin-top: 10px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;
export const IconContainer = styled.View`
  background: #41c900;
  height: 50px;
  padding: 13px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
`;
export const Icon = styled(Feather)`
  font-size: 24px;
  color: #fff;
`;

export const FooterOrder = styled.View`
  padding: 24px;
`;
