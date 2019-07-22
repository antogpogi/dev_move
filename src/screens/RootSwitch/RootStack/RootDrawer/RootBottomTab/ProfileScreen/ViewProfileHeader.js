import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import IconFont from 'react-native-vector-icons/FontAwesome';

const ViewProfileHeader = ({user, follow_unfollow}) => {
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.profile}>
                    <Image style={{width:70, height: 70, borderRadius: 70/2}} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
                </View>
                <View style={styles.body}>
                    <View style={{flex:1, justifyContent:"center"}}>
                        <Text style={{fontWeight:'bold', fontSize:23}}>{user.user_name}</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <TouchableOpacity onPress={() => {follow_unfollow({user_id: user.user_id})}} style={styles.followButton}><Text>Follow</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.followButton}><IconFont name={"envelope-o"} /></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.followingBody}>
                <TouchableOpacity style={styles.follow}><Text>Following</Text></TouchableOpacity>
                <TouchableOpacity style={styles.follow}><Text>Followers</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewProfileHeader;

const styles = StyleSheet.create({
    followButton:{
        padding:17, 
        alignContent:"center", 
        justifyContent:"center", 
        borderRadius:100/2, 
        borderWidth:StyleSheet.hairlineWidth, 
        borderColor:"#ccc",
        marginRight:5
    },
    header:{
      flex:1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      padding: 10
    },
    profile:{
      flexBasis:"30%",
      justifyContent:"center",
      alignItems:"center",
    },
    body:{
        flex:1
    },
    followingBody:{
        flex:1, 
        flexDirection:"row", 
        borderWidth:StyleSheet.hairlineWidth, 
        borderColor:"#ccc",
        justifyContent:"center",
        alignItems:"center",
    },
    follow:{
      borderColor:"#bbb", 
      padding:20,
      margin: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomLeftRadius:20/3,
      borderBottomRightRadius:20/3,
      borderTopLeftRadius:20/3,
      borderTopRightRadius:20/3,
    }
  });

