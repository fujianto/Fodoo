import React, { Component } from 'react';
import { Platform, StyleSheet, View, SafeAreaView } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, H1 } from 'native-base';

export default class SplashScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <H1>SPLASH</H1>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});