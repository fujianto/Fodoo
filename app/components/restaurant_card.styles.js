import styled, { css } from 'styled-components'
import { Image, View, Text } from 'react-native';
import { Card, CardItem, Badge, H3 } from 'native-base';

export const RCard = styled(Card) `
  borderRadius: 10;
  flex: 0;
`;

export const RCardItem = styled(CardItem) `
  borderBottomStartRadius: 5;
  borderBottomEndRadius: 5;
`;

export const RFeaturedWrapper = styled.View`
  position: relative;
`;

export const RTitleWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 10px 15px;
  alignContent: space-around;
  justifyContent: center;
  alignItems: center;
  flexDirection: row;
`;

export const RTitle = styled(H3) `
  color: #fff;
  fontWeight: bold;
  width: 70%;
`;

export const RSubtitle = styled.Text `
  color: #fff;
  fontWeight: bold;
  fontSize: 11px;
  margin: 0;
  text-align: center;
`;

export const RSubtitleWrapper = styled.View`
  width: 30%;
`;

export const RType = styled(H3)`
  textAlign: center;
  color: #fff;
  fontWeight: bold;
  fontSize: 20px;
`;

export const RInfoWrapper = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px 20px 0px 0px;
  width: 40%;
  backgroundColor: ${props => props.bgColor};
`;

export const RBeforeInfo = styled.View`
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 0;
  height: 0;
  borderStyle: solid;
  borderTopWidth: 10px;
  borderRightWidth: 75px;
  borderBottomWidth: 10px;
  borderLeftWidth: 75px;
  borderTopColor: ${props => props.bgColor};
  borderRightColor: transparent;
  borderBottomColor: transparent;
  borderLeftColor: ${props => props.bgColor};`;

export const RAfterInfo = styled.View`
  position: absolute;
  bottom: 0px;
  right: -32px;
  width: 0;
  height: 0;
  borderStyle: solid;
  borderTopWidth: 16px;
  borderRightWidth: 16px;
  borderBottomWidth: 16px;
  borderLeftWidth: 16px;
  borderTopColor: ${props => props.bgColor};
  borderRightColor: transparent;
  borderBottomColor: transparent;
  borderLeftColor: ${props => props.bgColor};`;