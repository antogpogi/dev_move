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

const EditProfileContent= ({}) => {
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{height: 165, width: '100%', elevation: 5, }}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', }}>
                    <Image source={require('../../../../../../../../../public/images/1559644819305.jpg')} style={{ height: 120, width: 120, borderRadius: 70 }}/>
                </View>
            </View>
            <View style={{height: '70%', width: '100%', paddingLeft: 25, paddingRight: 25, paddingTop: 15, elevation: 5, }}> 
                <View style={{}}>
                    <Text style={{color: 'gray'}}>Username</Text>
                </View>
                <View style={{bottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3' }}>
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
                    <Text style={{color: 'gray'}}>Email</Text>
                </View>
                <View style={{bottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3' }}>
                    <TextInput
                        placeholder={'kierronybel@gmail.com'}
                        placeholderTextColor="#000" 
                        ref={(input) => { this.secondTextInput = input; }}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                        style={{right: 4, top: 5, color: 'black'}}
                    />
                </View>
                <View>
                    <Text style={{color: 'gray'}}>Code</Text>
                </View>
                <View style={{ bottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#D3D3D3', width: 70, paddingRight: 20 }}>
                    <TextInput
                        placeholder={'+63'}
                        placeholderTextColor="#000" 
                        ref={(input) => { this.thirdTextInput = input; }}
                        onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                        style={{right: 4, top: 5, color: 'black'}}
                    />
                </View>
                <View style={{left: '30%', bottom: '18%'}}>
                    <Text style={{color: 'gray'}}>Phone</Text>
                </View>
                <View style={{left: '30%', bottom: '20.5%', borderBottomWidth: 0.5, borderBottomColor: '#D3D3D3', width: 100,}}>
                    <TextInput
                        placeholder={'9161519313'}
                        placeholderTextColor="#000" 
                        ref={(input) => { this.fourthTextInput = input; }}
                        onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                        style={{right: 4, top: 5, color: 'black'}}
                    />
                </View>
                <View style={{bottom: '18%'}}>
                    <Text style={{color: 'gray'}}>Location</Text>
                </View>
                <View style={{ bottom: '22%', borderBottomWidth: 0.5, borderBottomColor: '#D3D3D3'}}>
                    <TextInput
                        placeholder={'Manila'}
                        placeholderTextColor="#000" 
                        ref={(input) => { this.fifthTextInput = input; }}
                        style={{right: 4, top: 5, color: 'black'}}
                    />
                </View>
                <View style={{bottom: '16%'}}>
                    <Text style={{color: 'black'}}>Gender</Text>
                </View>
                <View style={{ bottom: '14%', borderBottomWidth: 0.5, borderBottomColor: '#D3D3D3'}}>
                </View>
                <View style={{alignItems: 'center', bottom: '10%'}}>

                <TouchableOpacity style={{justifyContent:'center', alignItems:'center', height: '35%', width: '35%', borderRadius: 30, backgroundColor:'#F6B397'}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{ width: '100%', height: '50%', backgroundColor: 'lightblue'}}> */}
                    
                {/* </View> */}
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

