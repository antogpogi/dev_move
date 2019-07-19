import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import BookMarkContent from './BookMarkContent';
// import { connect } from 'react-redux';
// import {site_url} from '../../../../../../../constants';
// import ProfileHeader from './ProfileHeader';
// import ProfileButtons from './ProfileButtons';
// import ProfileContent from './ProfileContent';
// import Loading from '../../../../../../../Loading';


const BookMarkScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BookMarkContent
            />
        </View>
    )
}


export default BookMarkScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

