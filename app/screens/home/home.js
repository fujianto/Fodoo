import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, H1 } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import Zomato from '../../api/zomato/handler';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleTabClick = (tab) => {
    alert("Tab Clicked");
  }

  async componentDidMount() {
    const res = await Zomato.getFeaturedRestaurant();
    console.log(res);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <H1>HOME</H1> 
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