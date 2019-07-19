import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import {site_url} from '../../../../../../../constants';
import ProfileHeader from './ProfileHeader';
import ViewProfileHeader from './ViewProfileHeader';
import ProfileButtons from './ProfileButtons';
import ProfileContent from './ProfileContent';
import Loading from '../../../../../../../Loading';

const ProfileScreen= ({navigation, session}) => {
  const [Menu, setMenu] = useState("pics")

  const [getLoading, setLoading] = useState(true)
  const [getPostId, setPostId] = useState(false)
  const [getVisible, setVisible] = useState(false)

  let payload = navigation.getParam('payload');
  const [getList, setList] = useState([]);
  const [getUser, setUser] = useState([]);
  const [getComment, setComment] = useState('');
  const [Viewing, setViewing] = useState('user')

  //data from login
  const userData = session.user.data;
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

  useEffect(() => {
    getInitialPost();
    getUserData();
  },[]);

  //load Home Feed
  getInitialPost = async () => { 
    //if view other profile, uses payload. if user profile, use UserData 
    payload == null ? payload = userData : [payload = payload, setViewing("other")];
    let formBod = new FormData();
    formBod.append('user_id', payload.user_id)
    formBod.append('is_tagged', 0)
    const url = site_url + "/user/posts_list/";
    const result = await axiosAPI(url, formBod);
    setLoading(false);
    result.data.data !== undefined ? 
    setList([...result.data.data]) : setList([])
  }

  getUserData = async () => {
    let formBod = new FormData();
    formBod.append('user_id', payload.user_id)
    const url = site_url + "/user/user_details/user_id/";
    const result = await axiosAPI(url, formBod);
    setUser(result.data.data)
  }

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

  const viewThisPost = (data) => {
    navigation.navigate('Post', {
      payload:{
        session: userData,
        post_id: data.post_id
      }
    });
  }

  const viewProfile = (data) => {
    navigation.navigate('ProfileS', {
      payload:{
        session: userData,
        user_id: data.user_id
      }
    });
  }

  const follow_unfollow = async (data) => {
    try{
      let formBod = new FormData()
      formBod.append("user_id", data.user_id)
      formBod.append("status", "follow")
      const url = site_url + "/follower_following/follow_unfollow/";
      setLoading(true)
      const res = await axiosAPI(url, formBod)
      console.log(res)
      setLoading(false)
      getInitialPost()
    }catch(error){
      console.error(error)
    }
  }
    return(
       <View style={styles.container}>
          <Loading loading={getLoading}/> 
          {/* if viewing other profile use ViewProfileHeader if user profile, use ProfileHeader */}
          {Viewing == "user" ? 
          <ProfileHeader user={getUser}/> : 
          <ViewProfileHeader user={getUser} follow_unfollow={follow_unfollow} />}
          <ProfileButtons setMenu={setMenu} />
          <ProfileContent Menu={Menu} getList={getList} viewThisPost={viewThisPost} getLoading={getLoading} getVisible={getVisible} setVisible={setVisible} getPostId={getPostId} openOption={openOption} like_unlike_post={like_unlike_post} comment_post={comment_post} setComment={setComment} getComment={getComment} viewLikes={viewLikes} viewComments={viewComments} viewProfile={viewProfile}  />
       </View>
    );
}

const mapStateToProps = state => {
  return{
    session: state.application.session
  }
}


export default connect (mapStateToProps, null)(ProfileScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

