import React, { createRef } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Styles
import {
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
import { TitleLeft } from "../../../components/TitleLeft";

function Login({ navigation }) {
  const email = createRef();
  const password = createRef();

  function handlerToPage() {
    navigation.navigate("Conta");
  }

  function handlerSubmit() {
    navigation.navigate("principal");
  }

  return (
    <Container>
      <TitleLeft>Login</TitleLeft>
      <FormContainer>
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
          <Button onPress={handlerSubmit}>
            <TextButton>Log in</TextButton>
          </Button>
        </ButtonLogin>
        <Description>
          <DescriptionText>Não tem uma conta? </DescriptionText>
          <DescriptionText bold={true} onPress={() => handlerToPage()}>
            Criar uma
          </DescriptionText>
        </Description>
      </FormContainer>
    </Container>
  );
}

Login.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
      <Ionicons name="ios-arrow-round-back" size={40} color="#C5CCD6" />
    </TouchableOpacity>
  )
});

const styled = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});
export default Login;
