import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ButtonLogin = styled(LinearGradient).attrs({
  colors: ["#667eea", "#64b6ff"],
  start: { x: 0.2, y: 0.1 },
  end: { x: 0.9, y: 0.9 }
})`
  width: ${props => (props.fullWidth === true ? "100%" : "75%")};
  height: 65px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  width: 75%;
  height: 65px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  font-size: 16px;
  color: ${props => (props.login === false ? "#707070" : "#fff")};
`;
