import React from 'react';

import { FlatList } from 'react-native';

import {
  Container,
  Header,
  ContentHeader,
  BackIcon,
  HeaderText,
  FoodContainer,
  FoodItem,
  FoodImageContainer,
  FoodImage,
  FoodContentContainer,
  FoodTitle,
  FoodDescription,
  FoodPrice,
} from './styles';

const dataFood = [
  {
    id: Math.random().toString(),
    title: 'Ao Molho bom',
    image:
      'https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/ao_molho.png',
    description: 'Macarrão ao molho branco, fughi e cheiro verde das montanhas',
    price: '190 Kz',
  },
  {
    id: Math.random().toString(),
    title: 'Ao Molho bom',
    image:
      'https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/ao_molho.png',
    description: 'Macarrão ao molho branco, fughi e cheiro verde das montanhas',
    price: '190 Kz',
  },
];

const FavoriteProduct: React.FC = () => {
  return (
    <Container>
      <Header>
        <ContentHeader>
          <BackIcon name="arrow-left" />
          <HeaderText>Meus favoritos</HeaderText>
        </ContentHeader>
      </Header>
      <FoodContainer>
        <FlatList
          data={dataFood}
          keyExtractor={(food) => food.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: food }) => (
            <FoodItem>
              <FoodImageContainer>
                <FoodImage
                  source={{
                    uri: food.image,
                  }}
                />
              </FoodImageContainer>
              <FoodContentContainer>
                <FoodTitle>{food.title}</FoodTitle>
                <FoodDescription>{food.description}</FoodDescription>
                <FoodPrice>{food.price}</FoodPrice>
              </FoodContentContainer>
            </FoodItem>
          )}
        />
      </FoodContainer>
    </Container>
  );
};

export default FavoriteProduct;
