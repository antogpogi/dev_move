import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
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

const SettingContent= ({
    viewProfile, 
    viewWalletHistory, 
    viewAddMoney, 
    viewStickers, 
    viewChangePass, 
    viewBookMarks, 
    viewBlockedUser, 
    viewAboutUs,
    viewContactUs
}) => {
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{ justifyContent: 'center', marginLeft: 15, height: 40, width: '100%', }}>
                <Text style={{ fontSize: 10 }}>ACCOUNT</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 360, width: '100%', elevation: 5, }}>
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={() => viewProfile()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3' }}>
                        <Icon name="user" size={25} style={{ color:'pink', }}/>
                        <View style={{left: '12%', bottom: '80%', }}>
                            <Text style={{fontSize: 15, color: 'black', justifyContent:'center'}}>Edit Profile</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{alignSelf: 'flex-end', bottom: 45, color: 'silver'}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={() => viewWalletHistory()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3'  }}>
                        <FontAwesome5 name="history" size={23} style={{ color:'pink',}}/>
                        <View style={{left: '12%', bottom: '80%', }}>
                            <Text style={{fontSize: 15, color: 'black', justifyContent:'center'}}>Wallet History</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{alignSelf: 'flex-end', bottom: 45, color: 'silver'}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={() => viewAddMoney()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3'  }}>
                        <Entypo name="wallet" size={24} style={{ color:'pink', }}/>
                        <View style={{left: '12%', bottom: '80%', }}>
                            <Text style={{fontSize: 15, color: 'black', justifyContent:'center'}}>Add Money</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{alignSelf: 'flex-end', bottom: 45, color: 'silver'}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={() => viewStickers()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3'  }}>
                        <FontAwesome5 name="smile" size={23} style={{ color:'pink', }}/>
                        <View style={{left: '12%', bottom: '80%', }}>
                            <Text style={{fontSize: 15, color: 'black', justifyContent:'center'}}>My Stickers</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{alignSelf: 'flex-end', bottom: 45, color: 'silver'}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={() => viewChangePass()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3'  }}>
                        <Octicons name="key" size={23} style={{ color:'pink', }}/>
                        <View style={{left: '12%', bottom: '80%', }}>
                            <Text style={{fontSize: 15, color: 'black', justifyContent:'center'}}>Change Password</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{alignSelf: 'flex-end', bottom: 45, color: 'silver'}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={() => viewBookMarks()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3'  }}>
                        <AntDesign name="book" size={23} style={{ color:'pink', }}/>
                        <View style={{left: '12%', bottom: '80%', }}>
                            <Text style={{fontSize: 15, color: 'black', justifyContent:'center'}}>Bookmarks</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{alignSelf: 'flex-end', bottom: 45, color: 'silver'}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} >
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3'  }}>
                        <FontAwesome5 name="history" size={23} style={{ color:'pink', }}/>
                        <View style={{left: '12%', bottom: '80%', }}>
                            <Text style={{fontSize: 15, color: 'black', justifyContent:'center'}}>Clear Search History</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{alignSelf: 'flex-end', bottom: 45, color: 'silver'}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={() => viewBlockedUser()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, }}>
                        <FontAwesome5 name="user-slash" size={23} style={{ color:'pink', }}/>
                        <View style={{left: '12%', bottom: '80%', }}>
                            <Text style={{fontSize: 15, color: 'black', justifyContent:'center'}}>Blocked Users</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{alignSelf: 'flex-end', bottom: 45, color: 'silver'}} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 15, height: 40, width: '100%', }}>
                <Text style={{ fontSize: 10 }}>ABOUT</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 178, width: '100%', elevation: 5, }}>
                <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20 }} onPress={() => viewAboutUs()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3'}}>
                        <MaterialCommunityIcons name="message-alert" size={25} style={{ color: 'pink', }} />
                        <View style={{ left: '12%', bottom: '80%', }}>
                            <Text style={{ fontSize: 15, color: 'black', justifyContent: 'center' }}>About Us</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{ alignSelf: 'flex-end', bottom: 45, color: 'silver' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20 }} onPress={() => viewContactUs()}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3' }}>
                        <MaterialCommunityIcons name="email" size={23} style={{ color: 'pink', }} />
                        <View style={{ left: '12%', bottom: '80%', }}>
                            <Text style={{ fontSize: 15, color: 'black', justifyContent: 'center' }}>Contact Us</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{ alignSelf: 'flex-end', bottom: 45, color: 'silver' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor:'#D3D3D3' }}>
                        <MaterialCommunityIcons name="file-lock" size={24} style={{ color: 'pink', }} />
                        <View style={{ left: '12%', bottom: '80%', }}>
                            <Text style={{ fontSize: 15, color: 'black', justifyContent: 'center' }}>Privacy Policy</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{ alignSelf: 'flex-end', bottom: 45, color: 'silver' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 22, paddingRight: 20 }}>
                    <View style={{ height: 45, width: '100%', paddingTop: 10, paddingBottom: 10 }}>
                        <Foundation name="clipboard-notes" size={25} style={{ color: 'pink', }} />
                        <View style={{ left: '11%', bottom: '80%', }}>
                            <Text style={{ fontSize: 15, color: 'black', justifyContent: 'center' }}>Terms & Conditions</Text>
                        </View>
                        <BackIcon name="ios-arrow-forward" size={22} style={{ alignSelf: 'flex-end', bottom: 45, color: 'silver' }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ height: 100, justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity style={{height: '30%', width: '30%',justifyContent:'center', alignItems: 'center'}}>
                    <Image source={require('../../../../../../../../public/images/logout.png')} style={{top: '50%', height: 30, width: 30, marginRight: '70%'}}/>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginLeft: '25%', bottom: '55%'  }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}



export default SettingContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    // height: '100%'
  },
  accountContainer: {
      backgroundColor: 'white',
    //   height: 
  }
});

