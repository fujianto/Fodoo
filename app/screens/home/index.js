import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import Zomato from '../../api/zomato/handler';

import { connect } from 'react-redux'
import { getFeaturedRestaurants } from '../../actions/restaurant_actions'
import { RestaurantCard } from '../../components/restaurant_card';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleTabClick = (tab) => {
    alert("Tab Clicked");
  }

  async componentDidMount() {
    // this.props.getFeaturedRestaurants();
  }

  renderFeaturedRestaurants() {

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <Container style={{ backgroundColor: '#fafafa'}}> 
          <Content>
            <RestaurantCard />
          </Content>
        </Container>
      </SafeAreaView>
    )
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