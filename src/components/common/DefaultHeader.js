import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconFont from 'react-native-vector-icons/FontAwesome';

export default function DefaultHeader({navigation}) {

    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}} style={styles.touchOpacity}>
                    <Image style={styles.image} source={require('../../../public/images/IMG_20190710_113534.jpg')} />    
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>YOLO</Text>
            </View>
            <View style={{flex:1, flexDirection:"row", justifyContent:'flex-end'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Search")}} style={styles.touchOpacityRight}>
                    <IconFont name={"search"} size={18} />
                </TouchableOpacity>
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
