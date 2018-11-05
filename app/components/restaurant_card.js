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

  const RInfoWrapper = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px 20px 0px 0px;
    width: 40%;
    backgroundColor: ${getRatingColor(rating)};
  `;

  const RBeforeInfo = styled.View`
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
    borderTopColor: ${getRatingColor(rating)}; 
    borderRightColor: transparent;
    borderBottomColor: transparent;
    borderLeftColor: ${getRatingColor(rating)};
  `;

  const RAfterInfo = styled.View`
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
    borderTopColor: ${getRatingColor(rating)}; 
    borderRightColor: transparent;
    borderBottomColor: transparent;
    borderLeftColor: ${getRatingColor(rating)};
  `;

  const success = +rating >= 4 ? true : false;
  const warning = +rating < 4 && +rating > 3 ? true : false;
  const danger = +rating <= 3 ? true : false;

  return (
    <TouchableHighlight onPress={() => alert('Clicked')}>
      <RCard>
        <RFeaturedWrapper>
          <FullWidthImage ratio={3/4} source={{ uri: image }} />
          <RInfoWrapper>
            <RBeforeInfo></RBeforeInfo>
            <RType>{ cuisines }</RType>
            <RAfterInfo></RAfterInfo>
          </RInfoWrapper>
            
          <View style={{ position: 'absolute', right: 15, top: 20}}>
            <TouchableHighlight onPress={() => alert('Liked')}>
              <Icon name='md-heart' style={{ color: '#fff' }}/>
            </TouchableHighlight>
          </View>

          <RTitleWrapper>
            <RTitle>{title}</RTitle>
            <RSubtitleWrapper>
              <Badge style={{ alignSelf: 'flex-end', minWidth: 30, minHeight: 30}} success={success} warning={warning} danger={danger}>
                <RSubtitle>{rating}</RSubtitle>
              </Badge>
            </RSubtitleWrapper>
          </RTitleWrapper>
        </RFeaturedWrapper>

        <RCardItem>
          <Body style={{ position: 'relative' }}>
            <Text>{ location }</Text>
            <Button onPress={() => alert('Added')} rounded warning style={{ position: 'absolute', right: -4, top: -4 }}>
              <Icon name='add' style={{fontSize: 30}}/>
            </Button>
            <Text>{currency} {average_cost_for_two} {i18n.t('label_for_two')}</Text>
          </Body>
        </RCardItem>
      </RCard>
    </TouchableHighlight>
  );
}

RestaurantCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    location: PropTypes.string,
    rating: PropTypes.string,
    cuisines: PropTypes.string,
    average_cost_for_two: PropTypes.string,
    currency: PropTypes.string
  })
}

RestaurantCard.defaultProps = {
  item: {
    image: 'https://dummyimage.com/266x138/000/fff',
    title: 'Jakarta Delights',
    location: 'Jakarta Barat, DKI Jakarta, Indonesia',
    rating: '4',
    cuisines: 'Restaurant',
    average_cost_for_two: '50',
    currency: '$'
  }
}

export default RestaurantCard;