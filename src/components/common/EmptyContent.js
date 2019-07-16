import React from 'react';
import {View, Text} from 'react-native';

function EmptyContent({message}) {
    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text>{message.message}</Text>
        </View>
    )
}

export default EmptyContent
