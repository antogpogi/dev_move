import React  from 'react';
import {StyleSheet, View} from 'react-native';
import Body from './Body'
import Loading from '../../../../../../../Loading';
import {connect} from 'react-redux';
import {site_url} from '../../../../../../../constants';

const MessagesScreen = ({navigation, session}) => {

  const userData = session.user.data;

    return (
        <View style={styles.container}>
           <Loading loading={getLoading} />
          <FlatList 
            data={Following}
            showsVerticalScrollIndicator={false}
            renderItem = {({item}) => 
              <Body userName={item.user_name} message={item.comment}/>
            }
          />
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
