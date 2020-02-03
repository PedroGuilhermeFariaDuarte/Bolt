import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  margin-top: 10px;
`;
export const Scroll = styled.ScrollView`
  width: 100%;
  flex: 1;
  margin-top: 120px;
`;

export const TitleLeft = styled.Text`
  font-size: 25px;
  color: #2a2a2a;
  font-weight: 300;
  margin-left: 20px;
`;
export const CoverProduct = styled.View`
  width: 100%;
  height: 300px;
  padding: 20px;
`;
export const PriceGroup = styled.View`
  width: 100%;
  height: 70px;
  padding: 20px;

  flex-direction: row;
  align-items: center;
`;
export const Price = styled.Text`
  font-size: 20px;
  color: #667eea;
`;
export const PriceOff = styled.Text`
  text-decoration: line-through;
  font-size: 12px;
  color: #2a2a2a;
  margin-left: 25px;
`;
export const Avaliation = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 20px;

  /* border-radius: 10px; */

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Vote = styled.View`
  width: 60%;
  height: 50px;
  margin-top: 10px;
  padding-right: 20px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const VoteNumber = styled.View`
  width: 90px;
  height: 100%;
  border-radius: 10px;
  background: #667eea;

  justify-content: center;
  align-items: center;
`;
export const TextVote = styled.Text`
  font-size: 16px;
  color: #f5f5f5;
`;
export const VoteDescription = styled.Text`
  font-size: 17px;
  margin-left: 10px;
  color: #2a2a2a;
`;
export const Comment = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const TotalComent = styled.Text`
  font-size: 17px;
  color: #667eea;
`;
export const Description = styled.View`
  width: 100%;
  height: auto;
  padding: 20px;
`;
export const TitleDescription = styled.Text`
  font-size: 15px;
  font-weight: 300;
  color: #2a2a2a;
`;
export const DescriptionContent = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  color: #707070;
`;

export const SelectGroup = styled.View`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Size = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2a2a2a;
`;
export const Color = styled.Text`
  font-size: 16px;
  font-weight: 200;
  color: #2a2a2a;
  margin-left: 20px;
`;

export const OptionGroup = styled.View`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Option = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background: ${props =>
    props.colorFull ? "#F3F3F3" : props.nope ? "#ffff" : "#667EEA"};
  margin: 10px;
  justify-content: center;
  align-items: center;
`;
export const OptionText = styled.Text`
  font-size: 12px;
  color: ${props => (props.colorFull ? "#f5f5f5" : "#2a2a2a")};
`;

export const PurchaseGroup = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Purchase = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${props => (props.colorFull ? "#E1E1E1" : "#667eea")};
`;

export const TextPurchase = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${props => (props.colorFull ? "#2A2A2A" : "#FFF")};
`;
