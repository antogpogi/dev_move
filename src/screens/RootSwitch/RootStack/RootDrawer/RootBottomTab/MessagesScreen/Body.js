import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

const Body= ({ getUser, onButtonClick, buttonText}) => {
    return(
        <View style={{flex: 1}}>
            <View style={styles.logoView}><Text style={styles.logo}>YOLO</Text></View>
                <View style={styles.loginView}>
                    <View style={styles.loginCard}>
                        <Text>Messages</Text>
                    </View>
                </View>
            <View style={styles.linkView} />
        </View>
    );
}


export default Body

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

