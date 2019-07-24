import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
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

const EditProfileContent= ({data}) => {
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{height: 165, width: '100%', elevation: 5,}}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', }}>
                    <Image source={require('../../../../../../../../../public/images/IMG_20190710_113534.jpg')} style={{ height: 120, width: 120, borderRadius: 70 }}/>
                </View>
            </View>
            <View style={{height: 320, width: '100%', elevation: 5, paddingLeft: 20, paddingRight: 20}}>
                <View>
                    <Text>Username</Text>
                </View>
                <View style={{borderBottomWidth: 2, borderBottomColor:'#D3D3D3', bottom: 15}}>
                    <TextInput
                        placeholder={'vyrrh'}
                        placeholderTextColor="#000" 
                        returnKeyType = { "next" }
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false}
                        style={{right: 4, top: 5, color: 'black'}}
                    />
                </View>
                <View>
                    <Text>Email</Text>
                </View>
                <View style={{borderBottomWidth: 2, borderBottomColor:'#D3D3D3', bottom: 15}}>
                    <TextInput
                        placeholder={'username@gmail.com'}
                        placeholderTextColor="#000" 
                        ref={(input) => { this.secondTextInput = input; }}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                        blurOnSubmit={false}
                        style={{right: 4, top: 5, color: 'black'}}
                    />
                </View>
                <View style={{flexDirection: 'row'}}> 
                    <View style={{}}>
                        <Text>Code</Text>
                        <View style={{width: 70, bottom: 20}}>
                            <Dropdown
                                // label='+63'
                                textColor={'black'}
                                baseColor={'black'}
                                data={data}
                                labelExtractor={({ label }) => label}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', left: 50}}>
                        <Text>Phone</Text>
                        <View style={{right: 40, justifyContent:'center',}}>
                            <TextInput
                                placeholder={'9161519313'}
                                placeholderTextColor="#000" 
                                ref={(input) => { this.thirdTextInput = input; }}
                                onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                                style={{right: 4, color: 'black',}}
                            />
                            <View style={{borderBottomWidth: 0.5, borderBottomColor: '#D3D3D3', bottom: 8}}></View>
                        </View>
                    </View>
                </View>
                <View style={{bottom: 15}}>
                    <View>
                        <Text>Location</Text>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#D3D3D3', bottom: 15 }}>
                        <TextInput
                            placeholder={'pabahay'}
                            placeholderTextColor="#000"
                            ref={(input) => { this.fourthTextInput = input; }}
                            // onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            blurOnSubmit={false}
                            style={{ right: 4, top: 5, color: 'black' }}
                        />
                    </View>
                </View>
                <View style={{bottom: 15, }}>
                    <View style={{}}>
                        <Text style={{}}>Gender</Text>
                        <View style={{borderBottomWidth: 2, borderBottomColor: '#D3D3D3', top: 10}}></View>
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center', height: 150, top: 10}}>
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center', height: '35%', width: '35%', borderRadius: 30, backgroundColor:'#F6B397'}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    )
}



export default EditProfileContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // height: '100%'
  },
  accountContainer: {
      backgroundColor: 'white',
    //   height: 
  }
});

