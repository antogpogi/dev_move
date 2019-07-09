import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const ProfileButton = ({setMenu}) => {
    return (
    <View style={styles.buttons}>
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => setMenu("pic")} style={styles.buttonItems}><Text>Photos</Text></TouchableOpacity>
        </View>
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => setMenu("posts")} style={styles.buttonItems}><Text>Posts</Text></TouchableOpacity>
        </View>
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => setMenu("shared")} style={styles.buttonItems}><Text>Tagged Photos</Text></TouchableOpacity>
        </View>
    </View>
    )
}

export default ProfileButton;

const styles = StyleSheet.create({
    buttons:{
      height:"6%",
      flexDirection:"row",
      alignItems:"center",
      elevation:1
    },
    buttonItems:{
      height:"100%", 
      alignItems:"center", 
      justifyContent:"center",
      borderTopColor: '#bbb',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      elevation: 0.4
    }
  });