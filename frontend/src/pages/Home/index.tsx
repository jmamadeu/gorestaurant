import React from 'react';

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
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

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
          <ButtonIcon name="log-in" />
        </ButtonContainer>
      </ImageContainer>
    </Container>
  );
};

export default Home;
