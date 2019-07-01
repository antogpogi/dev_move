import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import {site_url} from '../../../../../../constants';

const LogoutScreen = ({navigation}) => {

    const payload = navigation.getParam('payload');
    const userData = payload.session;

    let formBod = new FormData();
      formBod.append('user_id', userData.user_id)
      formBod.append('list_type', "following")
      axios({
        method: 'post',
        url: site_url + "/user/logout",
        headers:{
          "API-KEY" : "yolo@|-||_!$"
        }
      }).then((response) => {
        console.log(response)
      }).catch((response) => {
        console.log(response)
      })

    return (
        <View style={styles.container}></View>
    )
}

export default LogoutScreen
