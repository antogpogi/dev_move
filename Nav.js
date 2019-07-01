import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

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
        screen: YouScreen,
        navigationOptions: {
            header: null
        }
    },
    Following: {
        screen: FollowingScreen,
        navigationOptions: {
            header: null
        }
    }
})

//Root bottom navigation
const RootBottomTab = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Messages: {
        screen: MessagesScreen
    },
    Photo: {
        screen: PhotoScreen
    },
    Notifications: {
        screen: NotificationTopTab,
        navigationOptions: {
            header: null
        }
    },
    Profile:{
        screen: ProfileScreen
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
            titleStyle: {
                textAlign: 'center'
            },
             title: 'YOLO'
         })
    },
    Comments: {
        screen: CommentScreen,
        navigationOptions: () => ({
            title: "Comments"
        })
    },
    Likes: {
        screen: LikeScreen,
        navigationOptions: () => ({
            title: "Likes"
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