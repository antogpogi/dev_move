<script src="http://localhost:8081"></script>
import React from 'react';
import {StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import IconFont from 'react-native-vector-icons/FontAwesome';
import moment from 'moment-timezone';


const Post = ({posts, openOption, like_unlike, comment_post, setComment, getComment, viewLikes, viewComments, viewProfile}) => {
//   console.log(posts)
    return(
        <View style={{flex: 1}}>
            <View style={styles.post}>
                <View style={styles.head}>
                    <View style={[styles.user, styles.flexView]}>
                        <TouchableOpacity onPress={()=>{viewProfile({user_id: posts.user_id})}} style={{flexBasis:"60%", flexDirection:"row", alignItems:'center'}}>
                          <Image style={{width:35, height: 35, borderRadius: 35/2, marginRight:12, marginLeft:8}} source={require('../../../../../../../public/images/1559644819305.jpg')} />
                          <Text style={{fontWeight: 'bold'}}>{posts.user_name}</Text>
                        </TouchableOpacity>
                        <Text>{moment(moment.unix(posts.insertdate).format('YYYY-MM-DD hh:mm:ss')).fromNow()}</Text>
                        <IconFont style={{padding: 23}} onPress={() => {openOption({post_id: posts.post_id})}} name={"ellipsis-v"}  />
                    </View>
                    <View style={styles.details}>
                        <Text>{posts.caption}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    {/* <Image style={{width: "100%", height: "100%"}} source={{url: `${posts.post_media}`}} /> */}
                    <Image style={{width: "100%", height: "100%"}} source={require('../../../../../../../public/images/1559644819305.jpg')} />
                </View>
                <View style={styles.footer}>
                    <View style={[styles.activities, styles.flexView]}>
                        <View style={styles.activityBtn}>
                            {/* {posts.is_liked == "1" ? 
                            <Text style={{color: "blue", padding: 13, }} onPress={() => like_unlike({post_id: posts.post_id, status: 0})}>L</Text>
                            : <Text style={{padding: 13}} onPress={() => like_unlike({post_id: posts.post_id, status: 1})}>L</Text>
                            } */}
                            {posts.is_liked == "1" ? 
                            <IconFont name={"thumbs-up"} style={{color: "blue", padding: 18 }} onPress={() => like_unlike({post_id: posts.post_id, status: 0})} />
                            : <IconFont name={"thumbs-up"} style={{padding: 13}} onPress={() => like_unlike({post_id: posts.post_id, status: 1})} />
                            }
                            <Text onPress={() => viewLikes({post_id: posts.post_id})}>{posts.like_count} Like</Text>
                        </View>
                        <View style={styles.activityBtn}>
                            <IconFont name={"comments"} size={18} style={{padding: 13}} />
                            <Text onPress={() => viewComments({post_id: posts.post_id})}>{posts.comment_count} Comment</Text>
                        </View>
                        <View style={styles.activityBtn}>
                            <IconFont name={"share"} size={18} style={{padding: 13}} />
                            <Text>Share</Text>
                        </View>
                    </View>
                    <View style={styles.view_comments}>
                        <IconFont name={"comments"} size={18} style={{padding: 13}} />
                        <Text onPress={() => viewComments({post_id: posts.post_id})}>View all comments</Text>
                    </View>
                    <View style={[styles.commentBox, styles.flexView]}>
                        <Image style={{width:35, height: 35, borderRadius: 35/2, marginLeft:8}} source={require('../../../../../../../public/images/1559644819305.jpg')} />
                        <TextInput onChangeText={(text) => {
                            // alert(text);
                            setComment(text)
                        }} value={getComment} style={{flexBasis: '60%'}} placeholder="Write your comment..."></TextInput>
                        <IconFont name={"reply"} size={18} onPress={() => comment_post({post_id: posts.post_id})} />
                        {/* <Button onPress={() => comment_post({post_id: posts.post_id})} /> */}
                    </View>
                </View>
            </View>
        </View>
    );
}


export default Post

const styles = StyleSheet.create({
  post: {
      height: 730,
      borderBottomColor: '#bbb', 
      borderBottomWidth: 2.5
  },
  head:{
      flex: 1,
  },
  body:{
      flex:3,
  },
  footer:{
      flex:1,
  },
  flexView: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center'
  },
  activities: {
      justifyContent: 'space-evenly',
      height: 49

  },
  commentBox:{
      justifyContent: 'space-around',
  },
  user:{
      flex: 2,
      justifyContent: 'space-around'
  },
  details:{
      flex:1,
      marginLeft: 15
  },
  activityBtn:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view_comments:{
      marginLeft:15, 
      width:"90%", 
      borderBottomColor: '#bbb', 
      borderBottomWidth: 1, 
      flexDirection:'row',
      alignItems:'center'
    }
});

