import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Nav from './Nav';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import ProfileScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/ProfileScreen';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <PaperProvider>
          {/* <Nav /> */}
          <ProfileScreen />
        </PaperProvider>
      </Provider>
    );
  }
}

