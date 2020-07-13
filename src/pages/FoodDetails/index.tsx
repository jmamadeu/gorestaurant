import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import {
  ProductDetailstScreenNavigationProp,
  PropsDetails,
} from '../../routes/types';

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
  FooterOrder,
} from './styles';
import formatPrice from '../../utils/formatPrice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface IExtras {
  name: string;
  value: number;
  valueFormated: string;
}

interface IProductDetail {
  name: string;
  description: string;
  price: number;
  priceFormated: string;
  image_url: string;
  extras: IExtras[];
}

const FoodDetails: React.FC<PropsDetails> = ({ route }) => {
  const navigation = useNavigation<ProductDetailstScreenNavigationProp>();

  const [product, setProduct] = useState<IProductDetail>({} as IProductDetail);

  useEffect(() => {
    (async () => {
      try {
        if (!route.params.productId) return;

        let { data } = await api.get<IProductDetail[]>(
          `/foods?id=${route.params.productId}`
        );

        const productLoaded = data[0];

        productLoaded.priceFormated = formatPrice(productLoaded.price);
        productLoaded.extras = productLoaded.extras.map((extra) => ({
          ...extra,
          valueFormated: formatPrice(extra.value),
        }));

        console.log(productLoaded, 'extra');

        setProduct(productLoaded);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [route.params.productId]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('ProductList')}
          >
            <BackIcon name='arrow-left' />
          </TouchableOpacity>
          <HeaderTitle>Prato - Massas</HeaderTitle>
          <TouchableOpacity activeOpacity={0.6}>
            <RightIcon name='heart' />
          </TouchableOpacity>
        </HeaderContent>
      </Header>
      <Content>
        <FoodThumbnailContainer>
          <FoodThumbnail>
            <FoodImage
              source={{
                uri: product.image_url,
              }}
            />
          </FoodThumbnail>
          <FoodDescription>
            <FoodTitle>{product.name}</FoodTitle>
            <FoodDetail>{product.description}</FoodDetail>
            <FoodPrice>{product.priceFormated}</FoodPrice>
          </FoodDescription>
        </FoodThumbnailContainer>

        <SubTitle>Adicionais</SubTitle>
        {product?.extras?.map((extra, key) => (
          <AditionalContainer key={key}>
            <AditionalTitle>{extra.name}</AditionalTitle>
            <Inputs>
              <LessButton>
                <TextAditional>-</TextAditional>
              </LessButton>
              <AmountText>
                <TextAditional>0</TextAditional>
              </AmountText>
              <MoreButton>
                <TextAditional>+</TextAditional>
              </MoreButton>
            </Inputs>
          </AditionalContainer>
        ))}
      </Content>
      <FooterOrder>
        <SubTitle>Total do Pedido</SubTitle>

        <OrderContainer>
          <OrderPrice>0 Kz</OrderPrice>
          <InputsTotal>
            <LessButton>
              <TextAditional>-</TextAditional>
            </LessButton>
            <AmountText>
              <TextAditional>0</TextAditional>
            </AmountText>
            <MoreButton>
              <TextAditional>+</TextAditional>
            </MoreButton>
          </InputsTotal>
        </OrderContainer>

        <ConfirmButton>
          <ButtonText>Confirmar pedido</ButtonText>
          <IconContainer>
            <Icon name='check-square' />
          </IconContainer>
        </ConfirmButton>
      </FooterOrder>
    </Container>
  );
};

export default FoodDetails;
