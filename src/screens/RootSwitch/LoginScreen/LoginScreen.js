import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Body from './Body';
import {site_url} from '../../../../constants';
import axios from 'axios';
import Loading from '../../../../Loading';
import { connect } from 'react-redux';
import { setSession } from './../../../store/actions/application';

const Login = ({navigation, session, onSetSession}) => {

    const [getUsername, setUsername] = useState('')
    const [getPassword, setPassword] = useState('')

    const [getLoading, setLoading] = useState(false)

    const passNav = () => {
      console.log("Clicked");
      let formBod = new FormData();
      formBod.append('email',getUsername)
      formBod.append('device_type', "A")
      formBod.append('device_token', "huh")
      formBod.append('login_type', "S")
      formBod.append('password', getPassword)
      setLoading(true)
      axios({
        method: 'post',
        url: site_url + "/user/login/",
        data: formBod,
        headers:{
          "API-KEY" : "yolo@|-||_!$"
        }
      }).then((response) => {
        console.log(response.data)
        setLoading(false)
        onSetSession({
           user: response.data
        })
        navigation.navigate("Home") 

      }).catch((response) => {
        console.log(response)
      })
    }

    const reg = () => {
      navigation.navigate('Register')
    }


    return (
        <View style={styles.container}>
            <Loading loading={getLoading} />
            <Body setUsername={setUsername} setPassword={setPassword} onButtonClick={passNav} onButtonRegister={reg} />
        </View>
    )
  }

const mapDispatchToProps = dispatch => {
  return {
    onSetSession: value => dispatch(setSession(value))
  }
}

export default connect(null, mapDispatchToProps)(Login)


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

