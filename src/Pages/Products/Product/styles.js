import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: #f5f5f5;
`;
export const Header = styled.View`
  width: 100%;
  height: 250px;
  padding: 20px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const InputSearch = styled.View`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  position: absolute;
  bottom: 0px;
  margin-top: 20px;
  margin-left: 5%;
  z-index: 10;
  padding: 10px;
  /* background: #fff; */
  /* border: 1px solid #818181; */

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Search = styled.TextInput`
  width: 100%;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 10px;
  padding-left: 15px;
  margin-left: 10px;
`;
