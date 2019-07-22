import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconFont from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MessageDefaultHeader({navigation}) {

    

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>Messages</Text>
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
