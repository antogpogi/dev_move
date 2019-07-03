import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import Comment from './Comment';
import {site_url} from '../../../../../constants';
import axios from 'axios';
import Loading from '../../../../../Loading';

const CommentScreen = ({navigation}) => {

    const payload = navigation.getParam('payload');

    const [getLoading, setLoading] = useState(false)

    //data from login
    const userData = payload.session;

    const [Comments, setComments] = useState('')

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

    //load Comments
    const getInitialComments = async () => {  
      let formBod = new FormData();
      formBod.append('page', "0")
      formBod.append('post_id', payload.post_id)
      const url = site_url + "/posts/comment_list/";
      setLoading(true)
      const result = await axiosAPI(url, formBod);
      setLoading(false)
      setComments(result.data.data)
    }

    useEffect(() => {
        getInitialComments()
    },[]);

    return (
        <View style={styles.container}>
        <Loading loading={getLoading} />
         <FlatList 
          data={Comments}
          showsVerticalScrollIndicator={false}
          renderItem = {({item}) => 
            <Comment userName={item.user_name} message={item.comment}/>
          }
          keyExtractor={(item, index) => index.toString()}
         />   
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CommentScreen
