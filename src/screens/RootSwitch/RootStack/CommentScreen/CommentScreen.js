import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import Comment from './Comment';
import {site_url} from '../../../../../constants';
import axios from 'axios';
import Loading from '../../../../../Loading';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CommentScreen = ({navigation}) => {

    const payload = navigation.getParam('payload');
    const onGoBack = navigation.getParam('onGoBack');

    const [getLoading, setLoading] = useState(false)

    //data from login
    const userData = payload.session;

    const [Comments, setComments] = useState('')

    const [getComment, setComment] = useState('')

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

    const comment_post = async () => {
      try{
      let formBod = new FormData()
        formBod.append("post_id", payload.post_id)
        formBod.append("comment", getComment)

        const url = site_url + "/posts/new_comment";
        setLoading(true)
        await axiosAPI(url, formBod)
        setLoading(false)
        setComment('')
        getInitialComments()
        onGoBack()
      }catch(error){
        console.log(error)
      }
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
          style={{backgroundColor:'navajowhite'}}
         />
         <View style={{flexDirection:"row", alignItems:"center", backgroundColor:'navajowhite'}}>
            <View style={{flex:1,}}>
              <TextInput style={styles.txtBox} onChangeText={(text) => setComment(text)} value={getComment} placeholder="Write your comment..."/>
            </View>
            <View style={{flexBasis:"10%"}}>
              <TouchableWithoutFeedback onPress={() => comment_post()}>
                <IconFont name={"chevron-circle-right"} size={36} style={{color:"#00BFFF"}}/>
              </TouchableWithoutFeedback>
            </View>
         </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  txtBox: {
    height: 35,
    padding: 8, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:50/2,
    margin: 10,
    backgroundColor:'white'
  }
});

export default CommentScreen
