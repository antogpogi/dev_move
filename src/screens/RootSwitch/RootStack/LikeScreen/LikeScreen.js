import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import Like from './Like';
import {site_url} from '../../../../../constants';
import axios from 'axios';
import Loading from '../../../../../Loading';

const LikeScreen = ({navigation}) => {

    const payload = navigation.getParam('payload');

    const [getLoading, setLoading] = useState(false)
    
    //data from login
    const userData = payload.session;

    const [Likes, setLikes] = useState('')

    const axiosAPI = (url, body) => {
      return axios({
        method: 'post',
        url: url,
        data: body,
        headers:{
          "API-KEY" : "yolo@|-||_!$",
          "TOKEN" : userData.token
        }
      })
    }

    //load Likes
    const getInitialLikes = async () => {  
      let formBod = new FormData();
      formBod.append('page', "0")
      formBod.append('post_id', payload.post_id)
      const url = site_url + "/posts/like_list/";
      setLoading(true)
      const result = await axiosAPI(url, formBod);
      setLoading(false)
      setLikes(result.data.data)
    }

    useEffect(() => {
        getInitialLikes()
    },[]);


    return (
        <View style={styles.container}>
        <Loading loading={getLoading} />
         <FlatList 
          data={Likes}
          showsVerticalScrollIndicator={false}
          renderItem = {({item}) => 
            <Like userName={item.user_name}/>
          }

         />
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default LikeScreen
