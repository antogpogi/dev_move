import React, {Component, useEffect} from 'react';
import {View, Button} from 'react-native';
import axios from 'axios';
import {site_url} from '../../../../../../constants';
import { connect } from 'react-redux';

const LogoutScreen = ({navigation, session}) => {

  const userData = session.user.data;

  const logout = () => {
      axios({
        method: 'post',
        url: site_url + "/user/logout",
        headers:{
          "API-KEY" : "yolo@|-||_!$",
          "TOKEN" : userData.token
        }
      }).then((response) => {
        console.log(response)
        navigation.navigate("Login")
      }).catch((response) => {
        console.log(response)
      })
    }

    useEffect(() => {
      logout()
    }, [])

    return (
        <View>
        </View>
    )
}

const mapStateToProps = state => {
  return {
    session: state.application.session
  }
}

export default connect(mapStateToProps, null)(LogoutScreen) 
