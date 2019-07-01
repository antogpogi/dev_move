<script src="http://localhost:8097"></script>
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';


const Like = ({userName}) => {
    return(
        <View style={styles.LikeBox}>
            <View style={styles.image}>
                <Image style={{width:35, height: 35, borderRadius: 35/2, marginRight:8, marginLeft:8}} source={require('../../../../../public/images/1559644819305.jpg')} />
            </View>
            <View style={styles.info}>
                <Text style={styles.username}>{userName}</Text>
            </View>
        </View>
    );
}


export default Like

const styles = StyleSheet.create({
  LikeBox:{
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

