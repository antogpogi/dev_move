import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Body from './Body';
import Loading from '../../../../../../../../Loading';
import {connect} from 'react-redux';
import axios from 'axios';
import {site_url} from '../../../../../../../../constants';


const YouScreen = ({navigation, session}) => {

    // const payload = navigation.getParam('payload');

    const [getLoading, setLoading] = useState(false)

    //data from login
    const userData = session.user.data;

     const [Following, setFollowing] = useState('')

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


    const getInitialFollowing = async () => {
      let formBod = new FormData();
      formBod.append('type', "you")
      const url = site_url + "/notification/recent_activity/";
      setLoading(true)
      const result = await axiosAPI(url, formBod);
      setLoading(false)
      console.log({you:result.data.data})
      setFollowing(result.data.data)
    }

    useEffect(() => {
      getInitialFollowing()
    }, [])



    return (
      <View style={styles.container}>
      <Loading loading={getLoading} />
        <FlatList 
          data={Following}
          showsVerticalScrollIndicator={false}
          renderItem = {({item}) => 
            <Body userName={item.user_name} message={item.desc} timestamp={item.timestamp}/>
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

mapStateToProps = state => {
  return{
    session: state.application.session
  }
}

export default connect(mapStateToProps, null)(YouScreen)
