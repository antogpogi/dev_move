import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BackIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import axios from 'axios';
// import { connect } from 'react-redux';
// import {site_url} from '../../../../../../../constants';
// import ProfileHeader from './ProfileHeader';
// import ProfileButtons from './ProfileButtons';
// import ProfileContent from './ProfileContent';
// import Loading from '../../../../../../../Loading';

const ChangePassContent= ({}) => {
    return(
        // <View style={styles.container}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{height: 270, width: '100%',}}>
                <View style={{ height: '50%', marginTop: '5%'}}>
                    <View style={{justifyContent:'center', alignItems: 'center',}}>
                        <View style={{backgroundColor:'papayawhip', height: '85%', width: '30%', borderRadius: 120, justifyContent:'center', alignItems: 'center', }}>
                            <View style={{backgroundColor: 'lightcoral', justifyContent:'center', alignItems:'center', height: '80%', width: '75%', borderRadius: 120,}}>
                                <MaterialCommunityIcons name="lock-reset" size={50} style={{color: 'white'}}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: '10%'}}>
                    <View style={{justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>Reset Password</Text>
                    </View>
                </View>
                <View style={{height: '20%'}}>
                    <View style={{justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{color: 'black'}}>Enter your new password below,</Text>
                    </View>
                    <View style={{justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{color: 'black'}}>we're just being extra safe</Text>
                    </View>
                </View>
            </View>
            <View style={{height: 180, width: '100%'}}>
                <View style={{paddingLeft: 30, paddingRight: 30}}>
                    <TextInput
                        placeholder={'Current Password'}
                        style={{borderBottomWidth: 0.5, borderBottomColor: 'gray'}}
                        returnKeyType = { "next" }
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    />
                    <TextInput
                        placeholder={'New Password'}
                        style={{borderBottomWidth: 0.5, borderBottomColor: 'gray'}}
                        ref={(input) => { this.secondTextInput = input; }}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    />
                    <TextInput
                        placeholder={'Confirm Password'}
                        style={{borderBottomWidth: 0.5, borderBottomColor: 'gray'}}
                        ref={(input) => { this.thirdTextInput = input; }}
                        onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                    />
                </View>
            </View>
            <View style={{alignItems:'center', height: 70,}}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'lightcoral', height: '50%', width: '30%', borderRadius: 30}}>
                    <Text style={{}}>Reset</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
    )
}



export default ChangePassContent

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // position:'absolute',
    // backgroundColor: 'gainsboro',
    // height: '100%',
    // width: '100%'
  },
  accountContainer: {
      backgroundColor: 'white',
    //   height: 
  }
});