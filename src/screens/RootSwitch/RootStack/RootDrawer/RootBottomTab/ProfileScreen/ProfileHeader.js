import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';

const ProfileHeader = ({user}) => {
    return (
        <View style={styles.header}>
            <View style={styles.profile}>
                <Image style={{width:80, height: 80, borderRadius: 80/2}} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
            </View>
            <View style={styles.body}>
                <View style={{flex:1, justifyContent:"center"}}>
                <Text style={{fontWeight:'bold', fontSize:23}}>{user.user_name}</Text>
                </View>
                <View style={{flex:1, flexDirection:"row"}}>
                  <TouchableOpacity style={styles.follow}><Text>Following</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.follow}><Text>Followers</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfileHeader;

const styles = StyleSheet.create({
    header:{
      flex:1,
      flexDirection:"row",
    },
    profile:{
      flex:2,
      justifyContent:"center",
      alignItems:"center",
    },
    follow:{
      borderColor:"#bbb", 
      padding:20, 
      marginRight:25,
      marginBottom: 20,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomLeftRadius:20/3,
      borderBottomRightRadius:20/3,
      borderTopLeftRadius:20/3,
      borderTopRightRadius:20/3,
    }
  });

