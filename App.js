import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Nav from './Nav';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <PaperProvider style={{flex: 1}}>
          <SafeAreaView style={{flex:1}}>
            <Nav style={{flex:1}} />
          </SafeAreaView>
        </PaperProvider>
      </Provider>
    );
  }
}

