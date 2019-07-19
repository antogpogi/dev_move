import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import EditProfileContent from './EditProfileContent';
// import { connect } from 'react-redux';
// import {site_url} from '../../../../../../../constants';
// import ProfileHeader from './ProfileHeader';
// import ProfileButtons from './ProfileButtons';
// import ProfileContent from './ProfileContent';
// import Loading from '../../../../../../../Loading';

// const SettingScreen= ({navigation, viewSettings}) => {
    
//     return(
//         <View style={styles.container}>
//             <SettingContent/>
//         </View>
//     )
// }

const EditProfileScreen = () => {
          return(
              <View style={styles.container}>
                  <EditProfileContent/>
              </View>
          )
}


export default EditProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

