import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import ContactUsContent from './ContactUsContent';
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

const ContactUsScreen = () => {
          return(
              <View style={styles.container}>
                  <ContactUsContent/>
              </View>
          )
}


export default ContactUsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

