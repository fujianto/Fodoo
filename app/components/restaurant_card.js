import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export const RestaurantCard = () => {
  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: 'http://naisinpo.com/wp-content/uploads/2018/04/IMG-20180419-WA0000-150x150.jpg' }} />
          <Body>
            <Text>NativeBase</Text>
            <Text note>April 15, 2016</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image source={{ uri: 'http://naisinpo.com/wp-content/uploads/2018/04/IMG-20180419-WA0000-150x150.jpg' }} style={{ height: 200, width: 200, flex: 1 }} />
          <Text>
          //Your text here
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{ color: '#87838B' }}>
            <Icon name="logo-github" />
            <Text>1,926 stars</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
}