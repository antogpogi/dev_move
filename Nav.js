import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import IconFont from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/Ionicons';
import DefaultHeader from './src/components/common/DefaultHeader';
import SettingDefaultHeader from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/SettingDefaultHeader';

//Screens
import HomeScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/HomeScreen/HomeScreen';
import MessagesScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/MessagesScreen/MessegesScreen';
import FollowingScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/NotificationTopTab/FollowingScreen/FollowingScreen';
import YouScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/NotificationTopTab/YouScreen/YouScreen';
import PhotoScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/PhotoScreen/PhotoScreen';
import ProfileScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/ProfileScreen';
import LoginScreen from './src/screens/RootSwitch/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RootSwitch/RegisterScreen/RegisterScreen';
import CommentScreen from './src/screens/RootSwitch/RootStack/CommentScreen/CommentScreen';
import LikeScreen from './src/screens/RootSwitch/RootStack/LikeScreen/LikeScreen';
import LogoutScreen from './src/screens/RootSwitch/RootStack/RootDrawer/LogoutScreen/LogoutScreen';
import PostScreen from './src/screens/RootSwitch/RootStack/PostScreen/SinglePostScreen';
import SearchScreen from './src/screens/RootSwitch/RootStack/SearchScreen/SearchScreen';
import SettingScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/SettingScreen';
import EditProfileScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/EditProfileScreen/EditProfileScreen';
import ProfileDefaultHeader from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/ProfileDefaultHeader';
import WalletHistoryScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/WalletHistoryScreen/WalletHistoryScreen';
import AddMoneyScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/AddMoneyScreen/AddMoneyScreen';
import StickerScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/StickerScreen/StickerScreen';
import ChangePasswordScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/ChangePasswordScreen/ChangePassScreen';
import BookMarkScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/BookMarkScreen/BookMarkScreen';
import BlockedUserScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/BlockedUserScreen/BlockedUserScreen';
import AboutUsScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/AboutUsScreen/AboutUsScreen';
import ContactUsScreen from './src/screens/RootSwitch/RootStack/RootDrawer/RootBottomTab/ProfileScreen/SettingScreen/ContactUsScreen/ContactUsScreen';

//NotificationScreen with top navigation
const NotificationTopTab = createMaterialTopTabNavigator({
    You: {
        screen: YouScreen
    },
    Following: {
        screen: FollowingScreen
    }
})





const HomeStack = createStackNavigator({
    HomeS: {
        screen: HomeScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () => {
                return <DefaultHeader navigation={navigation} />
            }
        })
    },
    ViewProfile: {
        screen: ProfileScreen
    }
})

const MessagesStack = createStackNavigator({
    MessagesS: {
        screen: MessagesScreen,
    }
})

const PhotoStack = createStackNavigator({
    PhotosS: {
        screen: PhotoScreen,
    }
})

const NotificationStack = createStackNavigator({
    NotificationsS: {
        screen: NotificationTopTab,
        navigationOptions: () => ({
            headerStyle:{
                height:0,
                backgroundColor: 'transparent'
            }
        })
    }
})

const ProfileStack = createStackNavigator({
    ProfileS:{
        screen: ProfileScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return <ProfileDefaultHeader navigation={navigation} />
            }
        })
    },
})

const SettingsStack = createStackNavigator({
    SettingsS:{
        screen: SettingScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return <SettingDefaultHeader navigation={navigation} />
            }
        })
    },
    EditProfile:{
        screen: EditProfileScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Edit Profile</Text>
                        </View>
                    </View>
                )
            }
        })
    },
    WalletHistory:{
        screen: WalletHistoryScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Payment History</Text>
                        </View>
                    </View>
                )
            }
        })
    },
    AddMoney:{
        screen: AddMoneyScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Add Money</Text>
                        </View>
                    </View>
                )
            }
        })
    },
    Sticker:{
        screen: StickerScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>My Stickers</Text>
                        </View>
                    </View>
                )
            }
        })
    },
    ChangePass:{
        screen: ChangePasswordScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        {/* <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>My Stickers</Text>
                        </View> */}
                    </View>
                )
            }
        })
    },
    BookMark:{
        screen: BookMarkScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Bookmarks</Text>
                        </View>
                    </View>
                )
            }
        })
    },
    BlockedUser:{
        screen: BlockedUserScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Blocked Users</Text>
                        </View>
                        {/* <View style={{justifyContent: 'flex-end', alignItems:'flex-end', marginRight: '5%', bottom: '30%'}}>
                            <Feather 
                                name="search"
                                size={25}
                            />
                        </View> */}
                    </View>
                )
            }
        })
    },
    AboutUs:{
        screen: AboutUsScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>About Us</Text>
                        </View>
                        {/* <View style={{justifyContent: 'flex-end', alignItems:'flex-end', marginRight: '5%', bottom: '30%'}}>
                            <Feather 
                                name="search"
                                size={25}
                            />
                        </View> */}
                    </View>
                )
            }
        })
    },
    ContactUs:{
        screen: ContactUsScreen,
        navigationOptions:({navigation})=>({
            headerTitle: () =>{
                return (
                    <View style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: '10%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Contact Us</Text>
                        </View>
                        {/* <View style={{justifyContent: 'flex-end', alignItems:'flex-end', marginRight: '5%', bottom: '30%'}}>
                            <Feather 
                                name="search"
                                size={25}
                            />
                        </View> */}
                    </View>
                )
            }
        })
    },
})

//Root bottom navigation
const RootBottomTab = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: () => ({
            tabBarIcon: () => {
                return <IconFont name={"home"} size={17}/>
            }
        })
    },
    Messages: {
        screen: MessagesStack,
        navigationOptions:{
            tabBarIcon: () => {
                return <IconFont name={"envelope-o"} size={17}/>
            }
        }
    },
    Photo: {
        screen: PhotoStack,
        navigationOptions:{
            tabBarIcon: () => {
                return <IconFont name={"camera"} size={23} />
            }
        }
    },
    Notifications: {
        screen: NotificationStack,
        navigationOptions: {
            tabBarIcon: () => {
                return <IconFont name={"bell-o"} size={17}/>
            }
        }
    },
    Profile:{
        screen: ProfileStack,
        navigationOptions:{
            tabBarIcon: () => {
                return <IconFont name={"user"} size={17}/>
            }
        }
    }
})


const RootDrawer = createDrawerNavigator({
    Yolo: RootBottomTab,
    Logout: LogoutScreen
})

const RootStack = createStackNavigator({
    RootDrawer: {
        screen: RootDrawer,
        navigationOptions: () => ({
             header:null
         })
    },
    Comments: {
        screen: CommentScreen,
        navigationOptions: () => ({
            headerTitle: () => {
                return (
                <View style={{flex:1}}>
                    <Text>Comments</Text>    
                </View>
                )
            }
        })
    },
    Likes: {
        screen: LikeScreen,
        navigationOptions: () => ({
            headerTitle: () => {
                return (
                <View style={{flex:1}}>
                    <Text>Likes</Text>    
                </View>
                )
            }
        })
    },
    Post: {
        screen: PostScreen,
        navigationOptions: () => ({
            headerTitle: () => {
                return (
                <View style={{flex:1}}>
                    <Text>YOLO</Text>    
                </View>
                )
            }
        })
    },
    Search: {
        screen: SearchScreen,
        navigationOptions:{
            header:null
        }
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: () => ({
            header:null
        })
    }
})


//Root Screens for not nested screens.
 const RootSwitch = createSwitchNavigator({
     Login: LoginScreen,
     Register: RegisterScreen,
     App:  RootStack
 })

const RootContainer = createAppContainer(RootSwitch)

export default RootContainer;