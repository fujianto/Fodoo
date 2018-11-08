import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, FlatList } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import Zomato from '../../api/zomato/handler';

import { connect } from 'react-redux'
import { getFeaturedRestaurants } from '../../actions/restaurant_actions'
import RestaurantCard from '../../components/restaurant_card';
FlatList
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

  renderFeaturedRestaurant = ({ item }) => {
    return <RestaurantCard item={item} />;
  }

  render() {
    return <SafeAreaView style={{ flex: 1 }}>
        <Container style={{ backgroundColor: "#fafafa" }}>
          <Content>
          {
            this.props.restaurants.meta.status === "loading" ? 
              <Text>Loading...</Text> : 
              <FlatList data={this.props.restaurants.data} keyExtractor={(item, index) => `${item.id}-${item.name}`} renderItem={this.renderFeaturedRestaurant} />
          }
          </Content>
        </Container>
      </SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'space-between',
    // justifyContent: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

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