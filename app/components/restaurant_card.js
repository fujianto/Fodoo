import React from 'react';
import { Image, View, Text } from 'react-native';
import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, H3, H4 } from 'native-base';
import FullWidthImage from 'react-native-fullwidth-image';
import styled, { css } from 'styled-components'

const RCard = styled(Card)`
  borderRadius: 10;
  flex: 0;
`;

const RCardItem = styled(CardItem) `
  borderBottomStartRadius: 5;
  borderBottomEndRadius: 5;
`;

const RFeaturedWrapper = styled.View`
  position: relative;
`;

const RTitleWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 10px 15px;
  alignContent: space-around;
  justifyContent: center;
  flexDirection: row;
`;

const RTitle = styled(H3)`
  color: #fff;
  fontWeight: bold;
  width: 70%;
`;

const RSubtitle = styled(H3) `
  textAlign: right;
  color: #fff;
  width: 30%;
  fontSize: 15px;
`;

export const RestaurantCard = (props) => {
  return (
    <RCard>
      <RFeaturedWrapper>
        <FullWidthImage ratio={3 / 4} source={{ uri: 'http://naisinpo.com/wp-content/uploads/2018/04/IMG-20180419-WA0000-150x150.jpg' }} />
        <RTitleWrapper>
          <RTitle>Star Box</RTitle>
          <RSubtitle>Tue 7th 22H</RSubtitle>
        </RTitleWrapper>
      </RFeaturedWrapper>

      <RCardItem>
        <Body>
          <H3>Bogor, Bogor Utara, Indonesia</H3>
        </Body>
      </RCardItem>
    </RCard>
  );
}