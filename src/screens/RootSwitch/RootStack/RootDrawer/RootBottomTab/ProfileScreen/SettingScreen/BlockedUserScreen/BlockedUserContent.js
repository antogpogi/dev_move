import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BackIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
// import { connect } from 'react-redux';
// import {site_url} from '../../../../../../../constants';
// import ProfileHeader from './ProfileHeader';
// import ProfileButtons from './ProfileButtons';
// import ProfileContent from './ProfileContent';
// import Loading from '../../../../../../../Loading';

const BlockedUserContent = ({}) => {
    return(
        <View style={styles.container}>
            <View style={{paddingLeft: 30, paddingRight: 30}}>
                <TextInput
                  placeholder={'Search for user'}
                  style={{borderBottomWidth: 0.5, borderBottomColor: 'gray'}}
                />
                <Feather
                  name="search"
                  size={20}
                  style={{marginLeft: '92%', bottom: '43%'}}
                />
            </View>
            {/* <View style={{justifyContent:'flex-end', alignItems:'flex-end', bottom: '5%', marginRight: '5%'}}> */}
            
            {/* </View> */}
        </View>
    )
}



export default BlockedUserContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // height: '100%'
  },
  accountContainer: {
      backgroundColor: 'white',
    //   height: 
  }
});

