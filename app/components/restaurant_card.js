import React from 'react';
import { Image, View, TouchableHighlight } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import { Body, Badge, Text, Icon, Button } from 'native-base';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import i18n from '../i18n';
import {
  RCard,
  RCardItem,
  RFeaturedWrapper,
  RTitleWrapper,
  RTitle,
  RSubtitle,
  RType,
  RSubtitleWrapper,
  RInfoWrapper,
  RBeforeInfo,
  RAfterInfo
} from "./restaurant_card.styles";

const RestaurantCard = (props) => {
  const {
    image,
    name,
    location,
    city,
    rating,
    cuisines,
    cost,
    currency
  } = props.item;

  const getRatingColor = (rating) => {
    if (+rating >= 4) {
      return 'rgba(40, 167, 69, 0.7)';
    }
    
    if (+rating < 4 && +rating > 3 >= 4) {
      return 'rgba(232, 176, 8, 0.7)';
    }
    
    if (+rating <= 3) {
      return 'rgba(255, 0, 0, 0.7)';
    }

    return 'rgba(40, 167, 69, 0.7)';
  }

  const success = +rating >= 4 ? true : false;
  const warning = +rating < 4 && +rating > 3 ? true : false;
  const danger = +rating <= 3 ? true : false;

  return <TouchableHighlight onPress={props.onItemPress}>
      <RCard>
        <RFeaturedWrapper>
          <FullWidthImage ratio={3 / 4} source={{ uri: image }} />
          <RInfoWrapper bgColor={getRatingColor(rating)}>
            <RBeforeInfo bgColor={getRatingColor(rating)} />
            <RType>{cuisines}</RType>
            <RAfterInfo bgColor={getRatingColor(rating)} />
          </RInfoWrapper>

          <View style={{ position: "absolute", right: 15, top: 20 }}>
            <TouchableHighlight onPress={props.onLike}>
              <Icon name="md-heart" style={{ color: "#fff" }} />
            </TouchableHighlight>
          </View>

          <RTitleWrapper>
            <RTitle>{name}</RTitle>
            <RSubtitleWrapper>
              <Badge style={{ alignSelf: "flex-end", minWidth: 30, minHeight: 30 }} success={success} warning={warning} danger={danger}>
                <RSubtitle>{rating}</RSubtitle>
              </Badge>
            </RSubtitleWrapper>
          </RTitleWrapper>
        </RFeaturedWrapper>

        <RCardItem>
          <Body style={{ position: "relative" }}>
            <Text>
              {location}, {city}
            </Text>
            <Button onPress={props.onAddBackpack} rounded warning style={{ position: "absolute", right: -4, top: -4 }}>
              <Icon name="add" style={{ fontSize: 30 }} />
            </Button>
            <Text>
              {currency} {cost} {i18n.t("label_for_two")}
            </Text>
          </Body>
        </RCardItem>
      </RCard>
    </TouchableHighlight>;
}

RestaurantCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    city: PropTypes.string,
    rating: PropTypes.string,
    cuisines: PropTypes.string,
    cost: PropTypes.string,
    currency: PropTypes.string
  }),
  onItemPress: PropTypes.func,
  onLike: PropTypes.func,
  onAddBackpack: PropTypes.func
};

RestaurantCard.defaultProps = {
  item: {
    image: 'https://dummyimage.com/266x138/000/fff',
    name: 'Jakarta Delights',
    location: 'Jakarta Barat',
    city: 'DKI Jakarta',
    rating: '4',
    cuisines: 'Restaurant',
    cost: '50',
    currency: '$'
  },
  onItemPress: () => {
    alert('onItemPress')
  },
  onLike: () => {
    alert('onLike')
  },
  onAddBackpack: () => {
    alert('onAddBackpack')
  }
}

export default RestaurantCard;