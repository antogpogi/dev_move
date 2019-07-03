import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import moment from 'moment-timezone';

const Body= ({ userName, message, timestamp}) => {
    return(
        <View style={styles.notifBox}>
            <View style={styles.image}>
                <Image style={{width:35, height: 35, borderRadius: 35/2, marginRight:8, marginLeft:8}} source={require('../../../../../../../../public/images/1559644819305.jpg')} />
            </View>
            <View style={styles.info}>
                <Text style={styles.username}>{userName} {message} {moment(moment.unix(timestamp).format('YYYY-MM-DD hh:mm:ss')).fromNow()}</Text>
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
  }
});

