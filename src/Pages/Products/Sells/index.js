import React from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Assets - Featured
import ManProdutc from "../../../assets/man-product.svg";
import WomanProduct from "../../../assets/woman_product.svg";
// Assets - Best Sell
import WomanBestSell from "../../../assets/man2_bestsell.svg";
import ManBestSell from "../../../assets/woman_bestsell.svg";

// GLobal components
import {
  CardContainer,
  CardList,
  CardProduct,
  Details,
  ProductPrice,
  ProductName
} from "../../../components/Card";

import { TitleLeft } from "../../../components/TitleLeft";

// Style
import { Container } from "./styles";

function Sells({ navigation }) {
  const sells = [
    {
      product: "Man T-shirt",
      price: "R$34.00",
      image: ManBestSell
    },
    {
      product: "Woman T-shirt",
      price: "R$55.00",
      image: WomanBestSell
    },
    {
      product: "Woman T-shirt Summer",
      price: "R$33.00",
      image: WomanProduct
    },
    {
      product: "Man T-shirt Summer",
      price: "R$22.00",
      image: ManProdutc
    }
  ];

  return (
    <Container>
      <TitleLeft>Mais vendidos</TitleLeft>
      <CardContainer newHeight="600px">
        <CardList
          heightList={true}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={sells}
          keyExtractor={item => String(item.product)}
          renderItem={({ item }) => (
            <CardProduct
              featured={true}
              onPress={() => navigation.navigate("SelectedProduct")}
            >
              <SvgXml width="100%" height="250" xml={item.image} />
              <Details>
                <ProductPrice>{item.price}</ProductPrice>
                <ProductName>{item.product}</ProductName>
              </Details>
            </CardProduct>
          )}
        />
      </CardContainer>
    </Container>
  );
}

Sells.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="ios-arrow-round-back" size={40} color="#C5CCD6" />
    </TouchableOpacity>
  )
});
export default Sells;
