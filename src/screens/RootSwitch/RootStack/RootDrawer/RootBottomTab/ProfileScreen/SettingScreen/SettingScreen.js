import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import SettingContent from './SettingContent';
// import { connect } from 'react-redux';
// import {site_url} from '../../../../../../../constants';
// import ProfileHeader from './ProfileHeader';
// import ProfileButtons from './ProfileButtons';
// import ProfileContent from './ProfileContent';
// import Loading from '../../../../../../../Loading';


const SettingScreen = ({ navigation }) => {
    const viewProfile = (data) => {
        navigation.navigate('EditProfile');
    }
    const viewWalletHistory = (data) => {
        navigation.navigate('WalletHistory');
    }
    const viewAddMoney = (data) => {
        navigation.navigate('AddMoney');
    }
    const viewStickers = (data) => {
        navigation.navigate('Sticker');
    }
    const viewChangePass = (data) => {
        navigation.navigate('ChangePass');
    }
    const viewBookMarks = (data) => {
        navigation.navigate('BookMark');
    }
    const viewBlockedUser = (data) => {
        navigation.navigate('BlockedUser');
    }
    const viewAboutUs = (data) => {
        navigation.navigate('AboutUs');
    }
    const viewContactUs = (data) => {
        navigation.navigate('ContactUs');
    }
    return (
        <View style={styles.container}>
            <SettingContent
                viewProfile={viewProfile}
                viewWalletHistory={viewWalletHistory}
                viewAddMoney={viewAddMoney}
                viewStickers={viewStickers}
                viewChangePass={viewChangePass}
                viewBookMarks={viewBookMarks}
                viewBlockedUser={viewBlockedUser}
                viewAboutUs={viewAboutUs}
                viewContactUs={viewContactUs}
            />
        </View>
    )
}


export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

