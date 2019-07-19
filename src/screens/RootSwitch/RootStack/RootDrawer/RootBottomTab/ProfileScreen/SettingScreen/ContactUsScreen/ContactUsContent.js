import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
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

const ContactUsContent = ({ }) => {
    return (
        // <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{ height: 220, width: '100%'}}>
                <View style={{ height: '60%', marginTop: '5%',}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ backgroundColor: 'papayawhip', height: '85%', width: '30%', borderRadius: 120, justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{ backgroundColor: 'lightcoral', justifyContent: 'center', alignItems: 'center', height: '80%', width: '75%', borderRadius: 120, }}>
                                <AntDesign name="message1" size={50} style={{ color: 'white' }} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: '10%', }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 23 }}>Get in Touch!</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 250, width: '100%',}}>
                <View style={{ paddingLeft: 30, paddingRight: 30 ,}}>
                    <Text>Name</Text>
                    <View style={{bottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#D3D3D3', paddingRight: 20}}>
                    <TextInput
                        placeholder={'vyrrh'}
                        style={{ right: 4, top: 5, color: 'black'}}
                        returnKeyType={"next"}
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    />
                    </View>
                    <Text>Email</Text>
                    <View style={{bottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#D3D3D3', paddingRight: 20,}}>
                    <TextInput
                        placeholder={'Your Email'}
                        style={{ right: 4, top: 5, color: 'black' }}
                        ref={(input) => { this.secondTextInput = input; }}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    />
                    </View>
                    <View style={{borderWidth: 0.5, borderColor: '#D3D3D3', paddingLeft: 10, paddingRight: 10, borderRadius: 10,  height: '45%', alignItems: 'center'}}>
                    <TextInput
                        placeholder={'How can we help you?'}
                        style={{ right: 4, color: 'black',  }}
                        multiline = {true}
                        numberOfLines = {4}
                        ref={(input) => { this.thirdTextInput = input; }}
                        onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                    />
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', height: 150, top: '5%'}}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightcoral', height: '35%', width: '35%', borderRadius: 30, elevation: 5 }}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>Send</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}



export default ContactUsContent

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