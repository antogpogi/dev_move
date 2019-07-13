import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import IconFont from 'react-native-vector-icons/FontAwesome';

const SearchItem = ({item}) => {
    return (
         <View style={styles.notifBox}>
            <View style={styles.image}>
                {item.type == "places" ? <IconFont name={"map-marker"} size={28} style={{marginLeft:16}} /> : 
                item.type == "tags" ? <IconFont name={"tags"} size={28} style={{marginLeft:16}} /> : 
                <Image style={{width:35, height: 35, borderRadius: 35/2, marginLeft:8}} source={require('../../../../../public/images/1559644819305.jpg')} />}
            </View>
            <View style={styles.info}>
                <Text style={styles.username}>{item.name}</Text>
            </View>
        </View>
    )
}

export default SearchItem;

const styles = StyleSheet.create({
    notifBox:{
       height: 75, 
       flexDirection: 'row',
       flexWrap: 'nowrap',
       justifyContent: 'center',
       borderBottomColor: '#bbb',
       borderBottomWidth: StyleSheet.hairlineWidth
       },
     image:{
         marginLeft: 10,
         marginRight: 10,
         justifyContent: 'center'
     },
     info:{
         flex: 1,
         justifyContent: 'center',
         paddingLeft: 10
     }
   });
