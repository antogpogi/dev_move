import React from 'react';
import {StyleSheet, Image, View, Dimensions, TouchableOpacity} from 'react-native';
// import console = require('console');

const ImageList = ({item, viewThisPost}) => {
  if(item.empty === true){
    return (
      <View style={[styles.itemPic, styles.itemInvi]}></View>
    )
  }
  return (
    <View style={styles.itemPic}>
    <TouchableOpacity onPress={() => viewThisPost({post_id: item.post_id})}>
        <Image style={{width:'100%', height:'100%'}} source={require('../../../../../../../public/images/IMG_20190710_111946.jpg')} />
      </TouchableOpacity>
    </View>
  )
}

export default ImageList

const styles = StyleSheet.create({
    // style for render item in list view
    itemInvi:{
      backgroundColor:'transparent',
    },
    itemPic:{
      width:Dimensions.get('window').width / 3,
      height:Dimensions.get('window').width / 3
    }
  });