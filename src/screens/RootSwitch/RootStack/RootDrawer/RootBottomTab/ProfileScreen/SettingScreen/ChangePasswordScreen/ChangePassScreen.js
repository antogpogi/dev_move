import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import ChangePassContent from './ChangePassContent';
// import { connect } from 'react-redux';
// import {site_url} from '../../../../../../../constants';
// import ProfileHeader from './ProfileHeader';
// import ProfileButtons from './ProfileButtons';
// import ProfileContent from './ProfileContent';
// import Loading from '../../../../../../../Loading';


const ChangePasswordScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ChangePassContent
            />
        </View>
    )
}


export default ChangePasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

