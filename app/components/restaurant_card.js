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

class RestaurantCard extends React.PureComponent {
  state = {
    isLiked: false
  }

  render() {
    const {
      props
    } = this;

    const {
      id,
      image,
      name,
      location,
      city,
      rating,
      cuisines,
      cost,
      currency
    } = props.item;

    getRatingColor = (rating) => {
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

    onItemPress = id => {
      alert("Press: " + id);
    }

    onLike = id => {
      this.setState((prevState, nextProps) => {
        return {
          isLiked: !prevState.isLiked
        }
      })
    }

    onAddBackpack = id => {
      alert("ADD: " + id);
    };

    const success = +rating >= 4 ? true : false;
    const warning = +rating < 4 && +rating > 3 ? true : false;
    const danger = +rating <= 3 ? true : false;

    return <TouchableHighlight onPress={() => onItemPress(id)}>
        <RCard>
          <RFeaturedWrapper>
            <FullWidthImage ratio={3 / 4} source={{ uri: image }} />
            <RInfoWrapper bgColor={getRatingColor(rating)}>
              <RBeforeInfo bgColor={getRatingColor(rating)} />
              <RType>{cuisines}</RType>
              <RAfterInfo bgColor={getRatingColor(rating)} />
            </RInfoWrapper>

            <View style={{ position: "absolute", right: 15, top: 20 }}>
              <TouchableHighlight onPress={() => onLike(id)}>
                <Icon name="md-heart" style={{ color: this.state.isLiked ? "crimson" : "#fff" }} />
              </TouchableHighlight>
            </View>

            <RTitleWrapper>
              <RTitle>{name}</RTitle>
              <RSubtitleWrapper>
                <View style={{ alignSelf: 'flex-end', justifyContent:'center', backgroundColor: `${getRatingColor(rating)}`, borderRadius: 50, width: 30, height: 30 }}>
                  <RSubtitle>{rating}</RSubtitle>
                </View>
              </RSubtitleWrapper>
            </RTitleWrapper>
          </RFeaturedWrapper>

          <RCardItem>
            <Body style={{ position: "relative" }}>
              <Text>
                {location}, {city}
              </Text>
              <Button onPress={() => onAddBackpack(id)} rounded warning style={{ position: "absolute", right: -4, top: -4 }}>
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
}

RestaurantCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    city: PropTypes.string,
    rating: PropTypes.string,
    cuisines: PropTypes.string,
    cost: PropTypes.string,
    currency: PropTypes.string
  })
};

RestaurantCard.defaultProps = {
  item: {
    id: '1',
    image: 'https://dummyimage.com/266x138/000/fff',
    name: 'Jakarta Delights',
    location: 'Jakarta Barat',
    city: 'DKI Jakarta',
    rating: '4.5',
    cuisines: 'Restaurant',
    cost: '50',
    currency: '$'
  }
}

export default RestaurantCard;