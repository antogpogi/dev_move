import React from 'react';
import { StyleSheet, View } from 'react-native';
import Body from './Body'

const ProfileScreen = ({}) => {

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

export default ProfileScreen
