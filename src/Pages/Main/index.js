import React from "react";

import { SvgXml } from "react-native-svg";
import { Text } from "react-native";

// Styles
import { TitleGroup, Title, SubTitle } from "./styles";

// Global Components
import { ButtonLogin, Button, TextButton } from "../../components/Button";

import { Container } from "../../components/Container";

// Assets
import Background from "../../assets/logo.svg";

function Main({ navigation }) {
  return (
    <Container>
      <TitleGroup>
        <Title>Bem-Vindo ao Bolt</Title>
        <SubTitle>Explore-nos</SubTitle>
      </TitleGroup>
      <SvgXml width="350" height="350" xml={Background} />
      <ButtonLogin>
        <Button onPress={() => navigation.navigate("User")}>
          <TextButton>Log in</TextButton>
        </Button>
      </ButtonLogin>
      <Button>
        <TextButton login={false} onPress={() => navigation.navigate("Conta")}>
          Signup
        </TextButton>
      </Button>
    </Container>
  );
}

export default Main;
