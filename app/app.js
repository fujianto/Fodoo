/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import { Root} from 'native-base';

import HomeScreen from './screens/home/'
import SplashScreen from './screens/splash'

import store from './store';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import RNLanguages from 'react-native-languages';
import i18n from './i18n';

export default class App extends React.Component {
  componentDidMount() {
    RNLanguages.addEventListener('change', this._onLanguagesChange);
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener('change', this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language }) => {
    i18n.locale = language;
  };

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}

const AppScreen = {
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: i18n.t('header_title_home'),
      headerBackTitle: i18n.t('header_title_home'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0097A7',
      }
    }),
  },
  Splash: {
    screen: SplashScreen
  }
};

const AppNavigator = StackNavigator(AppScreen);
