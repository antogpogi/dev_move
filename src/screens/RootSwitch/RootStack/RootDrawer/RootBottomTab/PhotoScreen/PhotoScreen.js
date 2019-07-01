import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Body from './Body';
import ImagePicker from 'react-native-customized-image-picker';

const PhotoScreen = ({navigation}) => {

    const [getUser, setUser] = useState('Antog');

    return (
        <View style={styles.container}>
            <Body />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PhotoScreen
