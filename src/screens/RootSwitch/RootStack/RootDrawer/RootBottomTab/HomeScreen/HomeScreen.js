import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Post from './Post';
import axios from 'axios';
import {site_url} from '../../../../../../../constants';
import Loading from '../../../../../../../Loading';
import Options from './Options';
import { connect } from 'react-redux';

const HomeScreen = ({navigation, session}) => {

    const [getLoading, setLoading] = useState(true)
    const [getPostId, setPostId] = useState(false)
    const [getVisible, setVisible] = useState(false)

    // const payload = navigation.getParam('payload');
    const [getPost, setPost] = useState([]);
    const [getComment, setComment] = useState('');

    //data from login
    const userData = session.user.data;
    console.log(userData)

    //reuseable axios post
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

    //load Home Feed
    const getInitialPost = async () => {  
      let formBod = new FormData();
      formBod.append('type', "down")
      const url = site_url + "/user/home_feed/";
      const result = await axiosAPI(url, formBod);
      setLoading(false);
      setPost(result.data.data)
    }

    useEffect(() => {
        getInitialPost()
    },[]);

    //Like or unlike a post.
    const like_unlike_post = async (data) => {
      console.log(data);
      try{
        let formBod = new FormData()
        formBod.append("post_id", data.post_id)
        formBod.append("status", data.status)

        const url = site_url + "/posts/like_unlike/";
        setLoading(true)
        await axiosAPI(url, formBod)
        setLoading(false)
        getInitialPost()
      }catch(error){
        console.log(error)
      }

    }

    //send a comment.
    const comment_post = async (data) => {
      try{
      let formBod = new FormData()
        formBod.append("post_id", data.post_id)
        formBod.append("comment", getComment)

        const url = site_url + "/posts/new_comment";
        setLoading(true)
        await axiosAPI(url, formBod)
        setLoading(false)
        setComment('')
        getInitialPost()
      }catch(error){
        console.log(error)
      }
    }

    const openOption = (data) => {
      setPostId(data.post_id)
      setVisible(true)
    }    

    const viewComments = (data) => {
      navigation.navigate('Comments', {
        payload: {
          session: userData,
          post_id: data.post_id
        }
      });
    }

    const viewLikes = (data) => {
      navigation.navigate('Likes', {
        payload: {
          session: userData,
          post_id: data.post_id
        }
      });
    }


    return (
        <View style={styles.container}>
         <Loading loading={getLoading} />
         <Options visible={getVisible} setVisible={setVisible} post_id={getPostId} />
         <FlatList 
          data={getPost}
          showsVerticalScrollIndicator={false}
          renderItem = {({item}) => 
            <Post posts={item} openOption={openOption} like_unlike={like_unlike_post} comment_post={comment_post} setComment={setComment} getComment={getComment} viewLikes={viewLikes} viewComments={viewComments} />
          }
          extraData={getComment}
          keyExtractor={(item, index) => index.toString()}
         />
        </View>
    )
}

const mapStateToProps = state => {
  return{
    session: state.application.session
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 72,
    textAlign: 'left',
    margin: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  loginView:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginCard: {
    padding: 20,
    borderRadius: 15,
    borderColor: '#000',
    width: 320,
    height: 252,
    margin: 20,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    elevation: 1
  },
  linkView:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtBox: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10
  }
});

export default connect(mapStateToProps, null)(HomeScreen)
