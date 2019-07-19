import React, { useState }  from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
// import Body from './Body'
// import Loading from '../../../../../../../Loading';
import {connect} from 'react-redux';
import { Button } from 'react-native-paper';
// import {site_url} from '../../../../../../../constants';

const MessagesScreen = ({navigation, session}) => {

  const [getChat, setChat] = useState('')

  const userData = session.user.data;

  const sendMessage = () => {
    
  }

    return (
        <View style={styles.container}>
            <TextInput style={{height:50}} value={getChat} onChangeText={(text) => {setChat(text)}} />
            <Button onPress={() => sendMessage()} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return{
    session: state.application.session
  }
}

export default connect (mapStateToProps, null)(MessagesScreen)
