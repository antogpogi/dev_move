import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import AddMoneyContent from './AddMoneyContent';
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

const AddMoneyScreen = ({navigation}) => {
    const viewAddMoney = (data) => {
        navigation.navigate('AddMoney');
      }
          return(
              <View style={styles.container}>
                  <AddMoneyContent
                  />
              </View>
          )
}


export default AddMoneyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

