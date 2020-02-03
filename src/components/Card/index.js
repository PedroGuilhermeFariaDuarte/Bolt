import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const CardContainer = styled.View`
  width: 100%;
  height: ${props => (props.newHeight ? props.newHeight : "200px")};

  margin-top: 30px;
`;

export const CardHeader = styled.View`
  width: 100%;
  height: 70px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 30px;
  color: #434343;
`;

export const TitleSeeAll = styled.Text`
  font-size: 14px;
  color: #656565;
`;
export const CardList = styled.FlatList`
  ${props =>
    props.heightList &&
    css`
      height: 100%;
    `}
  flex: 1;
`;

export const CardDetails = styled.View`
  width: 214px;
  min-height: 110px;
  height: auto;
  border-radius: 10px;
  margin: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 214px;
  height: 110px;

  border-radius: 10px;
  margin: 10px;

  justify-content: center;
  align-items: center;
`;
export const ImageCard = styled.Image`
  width: 100%;
  border-radius: 10px;
  flex: 1;
`;
export const BackgroundCard = styled(LinearGradient).attrs({
  start: { x: 0.2, y: 0.1 },
  end: { x: 0.9, y: 0.9 }
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  z-index: 10;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TitleCard = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
export const CardProduct = styled.TouchableOpacity`
  width: 214px;
  height: 340px;
  margin: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${props =>
    props.featured &&
    css`
      width: 165px;
      height: 330px;
      margin: 5px;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0px;
    `}

  border-radius: 10px;
  overflow: hidden;
`;
export const ProductImage = styled.Image`
  width: 100%;
  flex: 1;
  border-radius: 10px;
`;
export const Details = styled.View`
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 10px;

  justify-content: center;
  align-items: center;
`;
export const ProductPrice = styled.Text`
  align-self: flex-start;
  font-size: 14px;
  margin-bottom: 10px;
  color: #2a2a2a;
`;
export const ProductName = styled.Text`
  align-self: flex-start;
  font-size: 15px;
  margin-bottom: 10px;
  color: #2a2a2a;
`;
