import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, H3 } from 'native-base';
import FullWidthImage from 'react-native-fullwidth-image'

const Styles = {
  featuredWrapper: { 
    position: 'relative', height: 150, flex: 1 
  },
  featuredImage: { 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0
  }
}

export const RestaurantCard = (props) => {
  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Body>
          <FullWidthImage ratio={3 / 4} source={{ uri: 'http://naisinpo.com/wp-content/uploads/2018/04/IMG-20180419-WA0000-150x150.jpg' }} />

          <H3>Name of Restaurant</H3>
        </Body>
      </CardItem>
    </Card>
  );
}