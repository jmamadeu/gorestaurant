import styled from "styled-components/native";

import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-bottom: 0;
`;

export const Header = styled.View`
  height: 130px;
  padding: 24px;
  padding-top: ${Constants.statusBarHeight + 10}px;
  flex-direction: row;
  justify-content: space-between;
  background: #c72828;
`;

export const Logo = styled.Image``;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  background: #fff;
`;

export const InputView = styled.View`
  margin-top: -55px;
  flex-direction: row;
  background: #f0f0f5;
  border-radius: 8px;
  align-items: center;
  padding: 4px;
  /* border: 2px solid #c72828; */
  z-index: 2;
`;

export const InputSearch = styled.TextInput`
  height: 50px;
  color: #b7b7cc;
  margin-left: 8px;
  flex: 1;
  padding: 8px;
  font-size: 16px;

  border-color: #c72828;
`;

// export const ContentFood = styled.ScrollView.attrs({
//   showsVerticalScrollIndicator: false,
// })`
//   margin-top: 15px;
// `;
export const ContentFood = styled.View`
  margin-top: 5px;
`;

export const CategoryContainer = styled.View``;

export const CategoryTitle = styled.Text`
  color: #3d3d4d;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-top: 10px;
`;

export const CategoryList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  margin-top: 10px;
`;

export const CategoryItem = styled.TouchableOpacity`
  /* flex: 1;
  height: 150px;
  align-items: center;
  justify-content: center; */

  flex: 1;
  background: #f0f0f5;

  width: 85px;
  height: 85px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
`;

export const CategoryItemImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CategoryItemTitle = styled.Text`
  /* margin-top: 15px; */
  color: #6c6c80;
  font-size: 15px;
`;

export const ProductContainer = styled.View`
  margin-top: 10px;
`;

export const FoodItem = styled.TouchableOpacity`
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
