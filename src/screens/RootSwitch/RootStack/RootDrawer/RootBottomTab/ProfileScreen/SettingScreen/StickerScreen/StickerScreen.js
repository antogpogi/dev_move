import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import StickerScreenContent from './StickerScreenContent';
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

const StickerScreen = ({navigation}) => {
          return(
              <View style={styles.container}>
                  <StickerScreenContent
                  />
              </View>
          )
}


export default StickerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

