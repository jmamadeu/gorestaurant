import React, { useCallback, useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { TabRouter, useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';

import { HomeScreenNavigationProp } from '../../routes/types';

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
  id: number;
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
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // navigate('')

  const [productToSearch, setProductToSearch] = useState('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [categoriesSelectedId, setCategoriesSelectedId] = useState<number[]>(
    []
  );

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

      setProducts(parseProducts(productsLoaded.data));
      setCategories(categoriesLoaded.data);
    })();
  }, []);

  useEffect(() => {
    searchProducts();
  }, [categoriesSelectedId, productToSearch]);

  async function searchProducts() {
    try {
      setProducts([]);

      let url = `/foods?name_like=${productToSearch}&`;

      if (categoriesSelectedId.length > 0) {
        url += categoriesSelectedId
          .map((categoryId) => `category=${categoryId}`)
          .join('&');
      }

      const productsLoaded = await api.get<IProduct[]>(url);

      setProducts(parseProducts(productsLoaded.data));
    } catch (err) {
      console.log(err);
    }
  }

  const handleClickCategories = useCallback(
    (id: number) => {
      const index = categoriesSelectedId.findIndex(
        (categoryId) => categoryId === id
      );

      if (index >= 0) {
        setCategoriesSelectedId(
          categoriesSelectedId.filter((oldId) => oldId !== id)
        );
      } else {
        setCategoriesSelectedId([...categoriesSelectedId, id]);
      }
    },
    [categoriesSelectedId]
  );

  function parseProducts(products: IProduct[]) {
    return products.map((product) => ({
      ...product,
      price: formatPrice(Number(product.price)),
    }));
  }

  function verifyCategoryChecked(id: number): boolean {
    const index = categoriesSelectedId.findIndex(
      (categoryId) => categoryId === id
    );

    return index >= 0 ? true : false;
  }

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
            // color={inputFocus ? '#c72828' : '#B7B7CC'}
            color='#B7B7CC'
            style={{ paddingLeft: 8 }}
          />
          <InputSearch
            inlineImageLeft='search_icon'
            placeholder='Qual comida você procura ?'
            // onFocus={() => setInputFocus(true)}
            autoCapitalize='none'
            // onEndEditing={() => setInputFocus(false)}
            value={productToSearch}
            onChangeText={(text) => setProductToSearch(text)}
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
                  {categories.map((category) => {
                    const check = verifyCategoryChecked(category.id);

                    return (
                      <CategoryItem
                        selected={check}
                        activeOpacity={0.6}
                        key={category.id}
                        onPress={() => handleClickCategories(category.id)}
                      >
                        <CategoryItemImage
                          source={{
                            uri: category.image_url,
                          }}
                        />
                        <CategoryItemTitle>{category.title}</CategoryItemTitle>
                      </CategoryItem>
                    );
                  })}
                </SkeletonContent>
              </CategoryList>
            </CategoryContainer>
            <CategoryTitle>Pratos</CategoryTitle>
            <ProductContainer>
              <SkeletonContent
                containerStyle={{
                  flex: 1,
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
                      navigation.navigate('Details', { productId: product.id })
                    }
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
