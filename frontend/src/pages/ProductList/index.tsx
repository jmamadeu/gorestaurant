import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';

import api from '../../services/api';

import {
  Container,
  Header,
  Logo,
  Content,
  InputView,
  InputSearch,
  ContentFood,
  CategoryTitle,
  CategoryList,
  CategoryItem,
  CategoryItemImage,
  CategoryItemTitle,
  FoodItem,
  FoodImageContainer,
  FoodImage,
  FoodContentContainer,
  FoodTitle,
  FoodDescription,
  FoodPrice,
  CategoryContainer,
  ProductContainer,
} from './styles';
import formatPrice from '../../utils/formatPrice';

interface IProduct {
  id: 1;
  name: string;
  description: string;
  price: string;
  thumbnail_url: string;
}

interface ICategory {
  id: number;
  title: string;
  image_url: string;
}

const ProductList: React.FC = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const skeletonLayoutCategories = [
    {
      width: 85,
      height: 85,
      marginRight: 10,
    },
    {
      width: 85,
      height: 85,
      marginRight: 10,
    },
    {
      width: 85,
      height: 85,
      marginRight: 10,
    },
    {
      width: 85,
      height: 85,
      marginRight: 10,
    },
  ];

  const skeletonLayoutProducts = [
    {
      flexDirection: 'row',
      children: [
        {
          width: 100,
          height: 100,
        },
        {
          flex: 1,
          marginLeft: 10,
          children: [
            {
              width: '100%',
              height: 35,
            },
            {
              width: '100%',
              height: 20,
              marginTop: 5,
            },
            {
              width: '100%',
              height: 35,
              marginTop: 5,
            },
          ],
        },
      ],
    },
    {
      marginTop: 10,
      flexDirection: 'row',
      children: [
        {
          width: 100,
          height: 100,
        },
        {
          flex: 1,
          marginLeft: 10,
          children: [
            {
              width: '100%',
              height: 35,
            },
            {
              width: '100%',
              height: 20,
              marginTop: 5,
            },
            {
              width: '100%',
              height: 35,
              marginTop: 5,
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    (async () => {
      const [categoriesLoaded, productsLoaded] = await Promise.all([
        api.get<ICategory[]>('/categories'),
        api.get<IProduct[]>('/foods'),
      ]);

      setProducts(
        productsLoaded.data.map((product) => ({
          ...product,
          price: formatPrice(Number(product.price)),
        }))
      );
      setCategories(categoriesLoaded.data);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/logo_home.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Feather
            name='log-out'
            size={28}
            color='#FFB84D'
            style={{ transform: [{ rotateY: '180deg' }] }}
          />
        </TouchableOpacity>
      </Header>
      <Content>
        <InputView>
          <Feather
            name='search'
            size={24}
            color='#B7B7CC'
            // color="#c72828"
            style={{ paddingLeft: 8 }}
          />
          <InputSearch
            inlineImageLeft='search_icon'
            placeholder='Qual comida você procura?'
          />
        </InputView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContentFood>
            <CategoryContainer>
              <CategoryTitle>Categorias</CategoryTitle>

              <CategoryList>
                <SkeletonContent
                  containerStyle={{
                    flex: 1,
                    // width: 300,
                    flexDirection: 'row',
                    // marginLeft: 10,
                  }}
                  layout={skeletonLayoutCategories}
                  isLoading={categories.length === 0}
                >
                  {categories.map((category) => (
                    <CategoryItem activeOpacity={0.6} key={category.id}>
                      <CategoryItemImage
                        source={{
                          uri: category.image_url,
                        }}
                      />
                      <CategoryItemTitle>{category.title}</CategoryItemTitle>
                    </CategoryItem>
                  ))}
                </SkeletonContent>
              </CategoryList>
            </CategoryContainer>
            <CategoryTitle>Pratos</CategoryTitle>
            <ProductContainer>
              <SkeletonContent
                containerStyle={{
                  flex: 1,
                  // width: 300,
                  marginBottom: 10,
                }}
                layout={skeletonLayoutProducts}
                isLoading={products.length === 0}
              >
                {products.map((product) => (
                  <FoodItem
                    key={product.id}
                    activeOpacity={0.6}
                    onPress={() =>
                      navigation.navigate('Details', { id: product.id })
                    }
                    // delayPressIn={2}
                  >
                    <FoodImageContainer>
                      <FoodImage
                        source={{
                          uri: product.thumbnail_url,
                        }}
                      />
                    </FoodImageContainer>
                    <FoodContentContainer>
                      <FoodTitle>{product.name}</FoodTitle>
                      <FoodDescription>{product.description}</FoodDescription>
                      <FoodPrice>{product.price}</FoodPrice>
                    </FoodContentContainer>
                  </FoodItem>
                ))}
              </SkeletonContent>
            </ProductContainer>
          </ContentFood>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default ProductList;
