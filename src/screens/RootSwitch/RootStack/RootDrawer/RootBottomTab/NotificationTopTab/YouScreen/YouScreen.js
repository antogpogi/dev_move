import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Body from './Body'

const Login = ({navigation}) => {

    const [getUser, setUser] = useState('Antog');


    const passNav = () => {
      navigation.navigate('Register', {
        payload: {
          message: '2k'
        }
      });
    }


    return (
        <View style={styles.container}>
            <Body getUser={getUser} buttonText={'HOME ALONE'} onButtonClick={passNav}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 72,
    textAlign: 'left',
    margin: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  loginView:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginCard: {
    padding: 20,
    borderRadius: 15,
    borderColor: '#000',
    width: 320,
    height: 252,
    margin: 20,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    elevation: 1
  },
  linkView:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtBox: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10
  }
});

export default Login
