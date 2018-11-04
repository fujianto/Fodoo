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

export const RSubtitle = styled(H3) `
  color: #fff;
  fontWeight: bold;
  fontSize: 11px;
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