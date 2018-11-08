import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, FlatList } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import Zomato from '../../api/zomato/handler';

import { connect } from 'react-redux'
import { getFeaturedRestaurants } from '../../actions/restaurant_actions'
import RestaurantCard from '../../components/restaurant_card';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleTabClick = tab => {
    alert("Tab Clicked");
  };

  componentDidMount() {
    this.props.getFeaturedRestaurants();
  }

  _renderFeaturedRestaurant = ({ item }) => {
    return <RestaurantCard item={item} />;
  };

  _keyExtractor = (item, index) => `${item.id}-${item.name}`;

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container style={{ backgroundColor: "#fafafa" }}>
          <Content>
            {this.props.restaurants.meta.status === "loading" ? (
              <Text style={{ flex: 1, alignSelf: "center" }}>Loading...</Text>
            ) : (
              <FlatList
                data={this.props.restaurants.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderFeaturedRestaurant}
              />
            )}
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurantReducer.restaurants,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFeaturedRestaurants: () => dispatch(getFeaturedRestaurants())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);