import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import WalletHistoryContent from './WalletHistoryContent';
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

const WalletHistoryScreen = ({navigation}) => {
    const viewWalletHistory = (data) => {
        navigation.navigate('WalletHistory');
      }
          return(
              <View style={styles.container}>
                  <WalletHistoryContent
                  />
              </View>
          )
}


export default WalletHistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

