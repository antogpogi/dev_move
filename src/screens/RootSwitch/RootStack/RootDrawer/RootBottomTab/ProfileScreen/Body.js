import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

const Body= () => {
    return(
       <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.profile}></View>
            <View style={styles.body}></View>
          </View>
          <View style={styles.buttons}></View>
          <View style={styles.images}></View>
       </View>
    );
}


export default Body

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

