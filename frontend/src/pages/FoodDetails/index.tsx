import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Header,
  HeaderContent,
  BackIcon,
  HeaderTitle,
  RightIcon,
  Content,
  FoodThumbnailContainer,
  FoodThumbnail,
  FoodImage,
  FoodDescription,
  FoodTitle,
  FoodDetail,
  FoodPrice,
  SubTitle,
  AditionalContainer,
  AditionalTitle,
  Inputs,
  LessButton,
  AmountText,
  MoreButton,
  TextAditional,
  OrderContainer,
  OrderPrice,
  InputsTotal,
  ConfirmButton,
  ButtonText,
  IconContainer,
  Icon,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const FoodDetails: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <BackIcon name="arrow-left" />
          <HeaderTitle>Prato - Massas</HeaderTitle>
          <RightIcon name="heart" />
        </HeaderContent>
      </Header>
      <Content>
        <FoodThumbnailContainer>
          <FoodThumbnail>
            <FoodImage
              source={{
                uri:
                  'https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png',
              }}
            />
          </FoodThumbnail>
          <FoodDescription>
            <FoodTitle>Ao Molho</FoodTitle>
            <FoodDetail>
              Macarrão ao molho branco, fughi e cheiro verde das montanhas.
            </FoodDetail>
            <FoodPrice>190 Kz</FoodPrice>
          </FoodDescription>
        </FoodThumbnailContainer>

        <SubTitle>Adicionais</SubTitle>
        <AditionalContainer>
          <AditionalTitle>Bacon</AditionalTitle>
          <Inputs>
            <LessButton>
              <TextAditional>-</TextAditional>
            </LessButton>
            <AmountText>
              <TextAditional>6</TextAditional>
            </AmountText>
            <MoreButton>
              <TextAditional>+</TextAditional>
            </MoreButton>
          </Inputs>
        </AditionalContainer>
        <AditionalContainer>
          <AditionalTitle>Bacon</AditionalTitle>
          <Inputs>
            <LessButton>
              <TextAditional>-</TextAditional>
            </LessButton>
            <AmountText>
              <TextAditional>6</TextAditional>
            </AmountText>
            <MoreButton>
              <TextAditional>+</TextAditional>
            </MoreButton>
          </Inputs>
        </AditionalContainer>

        <SubTitle>Total do Pedido</SubTitle>

        <OrderContainer>
          <OrderPrice>50 Kz</OrderPrice>
          <InputsTotal>
            <LessButton>
              <TextAditional>-</TextAditional>
            </LessButton>
            <AmountText>
              <TextAditional>6</TextAditional>
            </AmountText>
            <MoreButton>
              <TextAditional>+</TextAditional>
            </MoreButton>
          </InputsTotal>
        </OrderContainer>

        <ConfirmButton>
          <ButtonText>Confirmar pedido</ButtonText>
          <IconContainer>
            <Icon name="check-square" />
          </IconContainer>
        </ConfirmButton>
      </Content>
    </Container>
  );
};

export default FoodDetails;
