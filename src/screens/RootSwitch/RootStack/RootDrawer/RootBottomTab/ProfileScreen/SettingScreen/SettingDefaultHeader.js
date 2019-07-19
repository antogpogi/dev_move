import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackIcon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingDefaultHeader({navigation}) {

    const gobackProfile = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{width: 25, marginLeft: 15, alignItems:'center'}} onPress={() => gobackProfile()}>
                <BackIcon name={"ios-arrow-back"} size={20} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '30%'}}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Settings</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center', 
        flexDirection:'row'
    },
    touchOpacity:{
        marginLeft:8, 
        width:40
    },
    touchOpacityRight:{ 
        marginRight:8,
        width:20
    },
    image:{
        width:40, 
        height:40, 
        borderRadius: 40/2
    },
    title:{
        flex: 3, 
        alignItems:'center', 
        justifyContent:'center'
    }
})
