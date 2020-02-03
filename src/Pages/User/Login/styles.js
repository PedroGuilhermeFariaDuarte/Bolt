import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  flex-direction: column;

  align-items: center;
  padding: 20px;
  padding-top: 100px;
  padding-left: 30px;
  padding-right: 30px;
`;
export const FormContainer = styled.View`
  width: 100%;
  height: 300px;

  margin-top: 100px;
  align-items: center;
`;

export const GroupInput = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 25px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #a6a6a6;
  margin-bottom: 10px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-left: 10px;
`;

export const Description = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionText = styled.Text`
  font-size: 15px;
  font-weight: ${props => (props.bold === true ? "bold" : "normal")};
  color: #a6a6a6;
  margin-top: 30px;
`;
