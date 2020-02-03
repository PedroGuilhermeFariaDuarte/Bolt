import React from "react";
import { SvgXml } from "react-native-svg";

// Icons
import { AntDesign, Ionicons } from "@expo/vector-icons";

// Styles
import { Container, Header, InputSearch, Search } from "./styles";

// Assets - Featured
import ManProdutc from "../../../assets/man-product.svg";
import WomanProduct from "../../../assets/woman_product.svg";
// Assets - Best Sell
import WomanBestSell from "../../../assets/man2_bestsell.svg";
import ManBestSell from "../../../assets/woman_bestsell.svg";

// GLobal components
import {
  CardContainer,
  Title,
  TitleSeeAll,
  CardList,
  Card,
  BackgroundCard,
  ImageCard,
  TitleCard,
  CardProduct,
  CardHeader,
  Details,
  ProductPrice,
  ProductName
} from "../../../components/Card";

function Product({ navigation }) {
  const categorie = [
    {
      type: "Woman",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoSo9SLhtE7EzhCq2-uBbQfHMaGs8OkFCKghlhUn_jLNOlT3rJ",
      colours: {
        color1: "rgba(102,126,234,0.6)",
        color2: "rgba(100,182,255,0.5)"
      }
    },
    {
      type: "Man",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4PbEOz4XwgHDQ2VIbSF40ZITN-p6iAQUhmxIVpms9AdGxAl43",
      colours: {
        color1: "rgba(255,88,88,0.5)",
        color2: "rgba(251,88,149,0.6)"
      }
    },
    {
      type: "Kids",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaELyGa24C1_xMMbgVj1c-nDvMq5J2Bpw6pt66EtTi0svgmSq-",
      colours: {
        color1: "rgba(67,233,123,0.6)",
        color2: "rgba(56,249,215,0.5)"
      }
    }
  ];

  const featured = [
    {
      product: "Man T-shirt",
      price: "R$34.00",
      off: "R$19.00",
      image: ManProdutc,
      description: "",
      availiation: {
        vote: 2.2,
        description: "Muito Bom"
      },
      coments: {
        total: 2,
        coment: {
          username: "Pedro Guilherme",
          content: "Muito legal"
        }
      }
    },
    {
      product: "Woman T-shirt",
      price: "R$55.00",
      off: "R$19.00",
      image: WomanProduct,
      description: "",
      availiation: {
        vote: 2.2,
        description: "Muito Bom"
      },
      coments: {
        total: 2,
        coment: {
          username: "Pedro Guilherme",
          content: "Muito legal"
        }
      }
    }
  ];

  const bestSell = [
    {
      product: "Man T-shirt",
      price: "R$34.00",
      off: "R$19.00",
      image: ManBestSell,
      description: "",
      availiation: {
        vote: 2.2,
        description: "Muito Bom"
      },
      coments: {
        total: 2,
        coment: {
          username: "Pedro Guilherme",
          content: "Muito legal"
        }
      }
    },

    {
      product: "Woman T-shirt",
      price: "R$27.00",
      off: "R$19.00",
      image: WomanBestSell,
      description: "",
      availiation: {
        vote: 2.2,
        description: "Muito Bom"
      },
      coments: {
        total: 2,
        coment: {
          username: "Pedro Guilherme",
          content: "Muito legal"
        }
      }
    }
  ];

  return (
    <Container>
      <Header>
        <AntDesign
          name="menuunfold"
          size={28}
          color="#404040"
          onPress={() => navigation.navigate("Inicio")}
        />
        <AntDesign name="filter" size={28} color="#404040" />
        <InputSearch>
          <Ionicons name="ios-search" size={35} color="#707070" />
          <Search placeholder="Procure seu Produto" />
        </InputSearch>
      </Header>

      <CardContainer>
        <CardHeader>
          <Title>Categorias</Title>
          <TitleSeeAll>Ver todas</TitleSeeAll>
        </CardHeader>
        <CardList
          horizontal={true}
          data={categorie}
          keyExtractor={item => String(item.type)}
          renderItem={({ item }) => (
            <Card>
              <BackgroundCard
                colors={[item.colours.color1, item.colours.color2]}
              >
                <TitleCard>{item.type}</TitleCard>
              </BackgroundCard>
              <ImageCard
                source={{
                  uri: item.image
                }}
              />
            </Card>
          )}
        />
      </CardContainer>

      <CardContainer newHeight="450px">
        <CardHeader>
          <Title>Novidades</Title>
          <TitleSeeAll onPress={() => navigation.navigate("Featured")}>
            Ver todas
          </TitleSeeAll>
        </CardHeader>
        <CardList
          horizontal={true}
          data={featured}
          keyExtractor={item => String(item.product)}
          renderItem={({ item }) => (
            <CardProduct onPress={() => navigation.navigate("SelectedProduct")}>
              <SvgXml width="230" height="250" xml={item.image} />
              <Details>
                <ProductPrice>{item.price}</ProductPrice>
                <ProductName>{item.product}</ProductName>
              </Details>
            </CardProduct>
          )}
        />
      </CardContainer>

      <CardContainer newHeight="450px">
        <CardHeader>
          <Title>Mais Vendidos</Title>
          <TitleSeeAll onPress={() => navigation.navigate("Sells")}>
            Ver todas
          </TitleSeeAll>
        </CardHeader>
        <CardList
          horizontal={true}
          data={bestSell}
          keyExtractor={item => String(item.product)}
          renderItem={({ item }) => (
            <CardProduct onPress={() => navigation.navigate("SelectedProduct")}>
              <SvgXml width="230" height="250" xml={item.image} />
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

export default Product;
