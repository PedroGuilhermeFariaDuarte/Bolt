import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Assets - Featured
import ManProdutc from "../../../assets/man-product.svg";
import WomanProduct from "../../../assets/woman_product.svg";
// Assets - Product
import woman_product_selected from "../../../assets/woman_product_selected.svg";

// Style
import {
  Container,
  Scroll,
  TitleLeft,
  CoverProduct,
  PriceGroup,
  Price,
  PriceOff,
  Avaliation,
  Vote,
  VoteNumber,
  TextVote,
  VoteDescription,
  Comment,
  TotalComent,
  Description,
  TitleDescription,
  DescriptionContent,
  SelectGroup,
  Size,
  Color,
  PurchaseGroup,
  Purchase,
  TextPurchase,
  OptionGroup,
  Option,
  OptionText
} from "./styles";

function SelectedProduct() {
  return (
    <Container>
      <Scroll>
        <CoverProduct>
          <SvgXml width="100%" height="100%" xml={woman_product_selected} />
        </CoverProduct>

        <TitleLeft>Black turtleneck top</TitleLeft>

        <PriceGroup>
          <Price>R$42,00</Price>
          <PriceOff>R$62,00</PriceOff>
        </PriceGroup>

        <Avaliation style={styles.button}>
          <Vote>
            <VoteNumber>
              <TextVote>4.5</TextVote>
            </VoteNumber>
            <VoteDescription>Muito Bom</VoteDescription>
          </Vote>

          <Comment>
            <TotalComent>49 Comentários</TotalComent>
          </Comment>
        </Avaliation>

        <Description>
          <TitleDescription>Descrição</TitleDescription>
          <DescriptionContent>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </DescriptionContent>
        </Description>

        <SelectGroup style={styles.selectButton}>
          <Size>Selecionar Tamanho</Size>
          <Color>Selecionar Color</Color>
        </SelectGroup>

        <OptionGroup>
          <Option colorFull>
            <OptionText>S</OptionText>
          </Option>
          <Option>
            <OptionText colorFull>M</OptionText>
          </Option>
          <Option colorFull>
            <OptionText>L</OptionText>
          </Option>
          <Option nope>
            <OptionText>XXL</OptionText>
          </Option>
        </OptionGroup>

        <PurchaseGroup>
          <Purchase colorFull>
            <TextPurchase colorFull>ADD TO CART</TextPurchase>
          </Purchase>
          <Purchase>
            <TextPurchase>BUY NOW</TextPurchase>
          </Purchase>
        </PurchaseGroup>
      </Scroll>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 0.2)"
  },
  selectButton: {
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 0.2)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 0.2)"
  }
});

SelectedProduct.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="ios-arrow-round-back" size={40} color="#C5CCD6" />
    </TouchableOpacity>
  )
});

export default SelectedProduct;
