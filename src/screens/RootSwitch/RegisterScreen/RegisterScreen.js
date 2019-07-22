import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Body from './Body';
import axios from 'axios';
import {site_url} from '../../../../constants';

const RegisterScreen = ({navigation}) => {

    const [getUsername, setUsername] = useState('')
    const [getPassword, setPassword] = useState('')
    const [getName, setName] = useState('')

    const passNav = () => {
      console.log('Clicked');
      let formBod = new FormData();
      formBod.append('email',getUsername)
      formBod.append('user_name', getUsername)
      formBod.append('device_type', "A")
      formBod.append('device_token', "Antog")
      formBod.append('login_type', "S")
      formBod.append('password', getPassword)
      axios({
        method: 'post',
        url: site_url + "/user/signup/",
        data: formBod,
        headers:{
          "API-KEY" : "yolo@|-||_!$"
        }
      }).then((response) => {
        const key = "d695924b279f3ef3b1ca873fc0353691"
        const iv = "d695924b279f3ef3"

      })
    }


    return (
        <View style={styles.container}>
            <Body  onButtonClick={passNav} setUsername={setUsername} setPassword={setPassword} setName={setName}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RegisterScreen