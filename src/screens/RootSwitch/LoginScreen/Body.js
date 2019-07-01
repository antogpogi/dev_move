import React, {Component} from 'react';
import {Platform, StyleSheet, ImageBackground, Text, View, Button, TextInput} from 'react-native';

const Body = ({ setUsername, setPassword, onButtonClick, onButtonRegister}) => {
    return(
        <ImageBackground source={require("../../../../public/images/img.jpg")} style={{flex: 1}}>
            <View style={styles.logoView}><Text style={styles.logo}>YOLO</Text></View>
                <View style={styles.loginView}>
                    <View style={styles.loginCard}>
                        <Text>Email or Username</Text>
                        <TextInput style={styles.txtBox}  onChangeText={(text) => setUsername(text)}/>
                        <Text>Password</Text>
                        <TextInput style={styles.txtBox} onChangeText={(text) => setPassword(text)}/>
                        <Button color='#000' title='Login' onPress={onButtonClick} />
                        <Text style={{marginTop: 13}}>New here?  <Text onPress={onButtonRegister} style={{color:'blue'}}>Register</Text></Text>
                    </View>
                </View>
            <View style={styles.linkView} />
        </ImageBackground>
    );
}


export default Body

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 72,
    textAlign: 'left',
    margin: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  loginView:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginCard: {
    padding: 20,
    borderRadius: 15,
    borderColor: '#000',
    width: 320,
    height: 252,
    margin: 20,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    elevation: 1,
    backgroundColor: "white"
  },
  linkView:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtBox: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10
  }
});

