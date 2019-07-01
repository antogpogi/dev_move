import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

const Body= ({ getUser, onButtonClick, buttonText}) => {
    return(
        <View style={styles.notifBox}>
            <View style={styles.image}>
                <Image style={{width:35, height: 35, borderRadius: 35/2, marginRight:8, marginLeft:8}} source={require('../../../../../../../../public/images/1559644819305.jpg')} />
            </View>
            <View style={styles.info}>
                <Text style={styles.username}>{userName} {message}</Text>
                <Text style={{marginTop: 5}}>5 minutes ago</Text>
            </View>
        </View>
    );
}


export default Body

const styles = StyleSheet.create({
 notifBox:{
    height: 75, 
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
    },
  image:{
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center'
  },
  info:{
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 10
  },
  username:{
      fontWeight: 'bold'
  }
});

