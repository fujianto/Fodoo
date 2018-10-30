import React from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, H3 } from 'native-base';

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
          <View styles={{ position: 'relative', height: 150, flex: 1}}>
            <Image resizeMode="cover" style={{
              position: 'absolute', 
              height: 200, width: 200, flex: 1
            }} source={{ uri: 'http://naisinpo.com/wp-content/uploads/2018/04/IMG-20180419-WA0000-150x150.jpg' }} />
          </View>
          <H3>Name of Restaurant</H3>
        </Body>
      </CardItem>
    </Card>
  );
}