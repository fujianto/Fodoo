import React from 'react';
import { Image, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import { Body, Badge, Text } from 'native-base';
import PropTypes from 'prop-types';
import {
  RCard,
  RCardItem,
  RFeaturedWrapper,
  RTitleWrapper,
  RTitle,
  RSubtitle,
  RInfoWrapper,
  RType,
  RSubtitleWrapper,
  RBeforeInfo,
  RAfterInfo
} from './restaurant_card.styles';

const RestaurantCard = (props) => {
  const {
    image,
    title,
    location,
    rating,
    cuisines,
    average_cost_for_two,
    currency
  } = props;

  let success = +rating >= 4 ? true : false;
  let warning = +rating < 4 && +rating > 3 ? true : false;
  let danger = +rating <= 3 ? true : false;

  return (
    <RCard>
      <RFeaturedWrapper>
        <FullWidthImage ratio={3/4} source={{ uri: image }} />
        <RInfoWrapper>
          <RBeforeInfo></RBeforeInfo>
          <RType>{ cuisines }</RType>
          <RAfterInfo></RAfterInfo>
        </RInfoWrapper>
        
        <RTitleWrapper>
          <RTitle>{ title } </RTitle>
          <RSubtitleWrapper>
            <Badge style={{ alignSelf: 'flex-end', width: 30, height: 30 }} success={success} warning={warning} danger={danger}>
              <RSubtitle>{rating}</RSubtitle>
            </Badge>
          </RSubtitleWrapper>
        </RTitleWrapper>
      </RFeaturedWrapper>

      <RCardItem>
        <Body>
          <Text>{ location }</Text>
          <Text>{currency} {average_cost_for_two} for two</Text>
        </Body>
      </RCardItem>
    </RCard>
  );
}

RestaurantCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.string,
  cuisines: PropTypes.string,
  average_cost_for_two: PropTypes.string,
  currency: PropTypes.string
}

RestaurantCard.defaultProps = {
  image: 'https://dummyimage.com/266x138/000/fff',
  title: 'Jakarta Delights',
  location: 'Jakarta Barat, DKI Jakarta, Indonesia',
  rating: '4.5',
  cuisines: 'Restaurant',
  average_cost_for_two: '50',
  currency: '$'
};

export default RestaurantCard;