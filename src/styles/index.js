import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const LogoInitial = styled.Image`
  width: 300px;
  height: 300px;
`;

export const Button = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border-radius: 6px;
  align-items: center;
  background: -webkit-linear-gradient(to right, #667eea, #64b6ff);
  /* box-shadow: 12px 12px 2px rgba(444, 444, 444, 0.8); */
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #fff;
  text-align: center;
`;

export const TextTitle = styled.Text`
  font-size: 17px;
  color: #707070;
  text-align: center;
`;
