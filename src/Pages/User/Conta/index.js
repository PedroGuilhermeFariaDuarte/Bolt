import React, { createRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Styles
import {
  TitleLeft,
  FormContainer,
  Container,
  GroupInput,
  Label,
  Input,
  Description,
  DescriptionText
} from "./styles";

// Global Components
import { ButtonLogin, Button, TextButton } from "../../../components/Button";

function Conta({ navigation }) {
  const nome = createRef();
  const email = createRef();
  const password = createRef();

  function handlerToPage() {
    navigation.navigate("Login");
  }

  function handlerSubmit() {
    navigation.navigate("principal");
  }

  return (
    <Container>
      <TitleLeft>Cria conta</TitleLeft>
      <FormContainer>
        <GroupInput>
          <Label>Username</Label>
          <Input
            style={styled.border}
            KeyboardType="user-personal"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => email.current.focus()}
            ref={nome}
          />
        </GroupInput>

        <GroupInput>
          <Label>Email</Label>
          <Input
            style={styled.border}
            KeyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => password.current.focus()}
            ref={email}
          />
        </GroupInput>

        <GroupInput>
          <Label>Password</Label>
          <Input
            style={styled.border}
            secureTextEntry
            ref={password}
            returnKeyType="send"
            onSubmitEditing={() => handlerSubmit()}
          />
        </GroupInput>

        <ButtonLogin fullWidth={true}>
          <Button onPress={() => handlerSubmit()}>
            <TextButton>Sign up</TextButton>
          </Button>
        </ButtonLogin>
        <Description>
          <DescriptionText>Já tem uma conta? </DescriptionText>
          <DescriptionText bold={true} onPress={() => handlerToPage()}>
            Entrar
          </DescriptionText>
        </Description>
      </FormContainer>
    </Container>
  );
}

const styled = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});

Conta.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="ios-arrow-round-back" size={40} color="#C5CCD6" />
    </TouchableOpacity>
  )
});
export default Conta;
