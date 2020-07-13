import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../routes/types';

import {
  Container,
  Content,
  LogoFull,
  Slogan,
  ButtonContainer,
  ButtonText,
  ImageContainer,
  ButtonIcon,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <Container>
      <ImageContainer
        imageStyle={{ height: 350, width: 290 }}
        source={require('../../assets/background.png')}
      >
        <Content>
          <LogoFull source={require('../../assets/full_logo.png')} />

          <Slogan>Uma verdadeira experiência Italiana.</Slogan>
        </Content>
        <ButtonContainer
          onPress={() => {
            navigation.navigate('DashboardBottomRoutes');
          }}
        >
          <ButtonText>Entrar no Restaurante</ButtonText>
          <ButtonIcon name='log-in' />
        </ButtonContainer>
      </ImageContainer>
    </Container>
  );
};

export default Home;
