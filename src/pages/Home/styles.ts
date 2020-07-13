import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

// <Entypo name="login" size={24} color="black" />

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #c72828;
  justify-content: center;
`;

export const ImageContainer = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  justifyContent: 'center',
})`
  flex: 1;
  padding: 30px;
`;

export const Content = styled.View`
  flex: 1;

  justify-content: center;
`;

export const LogoFull = styled.Image``;

export const Slogan = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  margin-top: 40px;
`;

export const ButtonContainer = styled(RectButton)`
  background: #ffb84d;
  border-radius: 8px;
  height: 56px;
  flex-direction: row;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #7a1818;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonIcon = styled(Feather)`
  color: #7a1818;
  background: #ffc46b;
  height: 56px;
  font-size: 24px;
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
