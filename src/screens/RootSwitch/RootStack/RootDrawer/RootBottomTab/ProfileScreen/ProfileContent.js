import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList } from 'react-native-gesture-handler';
import Loading from '../../../../../../../Loading';
import Options from '../HomeScreen/Options';
import Post from '../HomeScreen/Post';
import ImageList from './ImageList';
import EmptyContent from "../../../../../../components/common/EmptyContent";

const numColumns = 3


const ProfileContent = ({Menu, getList, viewThisPost, getLoading, getVisible, setVisible, getPostId, openOption, like_unlike_post, comment_post, setComment, getComment, viewLikes, viewComments, viewProfile}) => {
    return (
        <View style={styles.content}>
          {Menu == "pics" ? 
          (getList != [] ? 
          <View style={{flex:1}}>
              <FlatList 
                  data={getList}
                  style={styles.list}
                  contentContainerStyle={{alignItems:'flex-start', justifyContent:'space-between', display:'flex'}}
                  renderItem={({item}) => {
                    return(
                        <ImageList item={item} viewThisPost={viewThisPost} />                 
                    );
                    }
                  }
                  numColumns={numColumns}
                  keyExtractor={(item, index) => index.toString()}
              /></View> : <EmptyContent message={{message: "No photos"}} />)
             : 
            Menu == "posts" ?
            (getList != [] ?
            <View style={{flex:1}}>
              <Loading loading={getLoading} />
              <Options visible={getVisible} setVisible={setVisible} post_id={getPostId} />
              <FlatList 
                  data={getList}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return(
                      <Post posts={item} openOption={openOption} like_unlike={like_unlike_post} comment_post={comment_post} setComment={setComment} getComment={getComment} viewLikes={viewLikes} viewComments={viewComments} viewProfile={viewProfile} />
                    );
                    }
                  }
                  extraData={getComment}
                  keyExtractor={(item, index) => index.toString()}
              /></View> : <EmptyContent message={{message: "No Posts"}} />)
             :
            Menu == "shared" ? 
              (getList != [] ? 
            <View style={{flex:1}}>
              <FlatList 
                  data={getList}
                  style={styles.list}
                  renderItem={({item}) => 
                    <ImageList item={item} viewThisPost={viewThisPost}/>
                  }
                  numColumns={numColumns}
                  keyExtractor={(item, index) => index.toString()}
              />
              </View> : <EmptyContent message={{message: "No Shared Posts"}} />
            ) : <View></View>
            } 
          </View>
    )
}

export default ProfileContent;

const styles = StyleSheet.create({
    content:{
      flex:3,
    },
    list:{
      flex: 1, 
    }
  });