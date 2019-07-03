import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

import React from 'react';
import {Text} from 'react-native'

import IconFont from 'react-native-vector-icons/FontAwesome';

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




//NotificationScreen with top navigation

const NotificationTopTab = createMaterialTopTabNavigator({
    You: {
        screen: YouScreen
    },
    Following: {
        screen: FollowingScreen
    }
})

//Root bottom navigation
const RootBottomTab = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarIcon: () => {
                return <IconFont name={"home"} size={17}/>
            },
            header: () => {
                return <Text>Home</Text>
            }
        })
    },
    Messages: {
        screen: MessagesScreen,
        navigationOptions:{
            tabBarIcon: () => {
                return <IconFont name={"envelope-o"} size={17}/>
            }
        }
    },
    Photo: {
        screen: PhotoScreen,
        navigationOptions:{
            tabBarIcon: () => {
                return <IconFont name={"send-o"} size={23} />
            }
        }
    },
    Notifications: {
        screen: NotificationTopTab,
        navigationOptions: {
            headerMode: 'none',
            tabBarIcon: () => {
                return <IconFont name={"bell-o"} size={17}/>
            }
        }
    },
    Profile:{
        screen: ProfileScreen,
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
             title: "YOLO"
         })
    },
    Comments: {
        screen: CommentScreen,
        navigationOptions: () => ({
            header: () => {
                return <Text>Comments</Text>
            }
        })
    },
    Likes: {
        screen: LikeScreen,
        navigationOptions: () => ({
            header: () => {
                return <Text>Likes</Text>
            }
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