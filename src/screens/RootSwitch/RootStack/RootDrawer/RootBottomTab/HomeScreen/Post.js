<script src="http://localhost:8081"></script>
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import IconFont from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment-timezone';


const Post = ({ posts, openOption, like_unlike, comment_post, setComment, getComment, viewLikes, viewComments, viewProfile }) => {
      console.log(posts)
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.post}>
                <View style={styles.head}>
                    <View style={[styles.user, styles.flexView]}>
                        <TouchableOpacity onPress={() => { viewProfile({ user_id: posts.user_id }) }} style={{ flexBasis: "60%", flexDirection: "row", alignItems: 'center', }}>
                            <Image style={{ width: 45, height: 45, borderRadius: 10, marginRight: 12, marginLeft: 8 }} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
                            <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black' }}>{posts.user_name}</Text>
                        </TouchableOpacity>
                        <Text style={{color: 'black'}}>{moment(moment.unix(posts.insertdate).format('YYYY-MM-DD hh:mm:ss')).fromNow()}</Text>
                        <FontAwesome5 style={{ padding: 23, color: 'black' }} onPress={() => { openOption({ post_id: posts.post_id }) }} name={"ellipsis-h"} size={20} />
                    </View>
                    <View style={styles.details}>
                        <Text style={{ fontSize: 17, color: 'black' }}>{posts.caption}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    {/* <Image style={{width: "100%", height: "95%", borderRadius: 10}} source={{uri: `${posts.post_media}`}} /> */}
                    <Image style={{ width: "100%", height: "95%", borderRadius: 10 }} source={require('../../../../../../../public/images/IMG_20190710_111946.jpg')} />
                </View>
                <View style={styles.footer}>
                    <View style={styles.activities}>
                        <View style={styles.activityBtn}>
                            {posts.is_liked == "1" ?
                                <FontAwesome name={"heart"} size={18} style={{ color: "red", padding: 18, }} onPress={() => like_unlike({ post_id: posts.post_id, status: 0 })} />
                                : <Feather name={"heart"} size={18} style={{ padding: 18, color:'black' }} onPress={() => like_unlike({ post_id: posts.post_id, status: 1 })} />
                            }
                            <Text onPress={() => viewLikes({ post_id: posts.post_id })} style={{color: 'black'}}>{posts.like_count}</Text>
                        </View>
                        <View style={styles.activityBtn}>
                            <Feather name={"message-square"} size={18} style={{ padding: 13, color: 'black' }} onPress={() => viewComments({ post_id: posts.post_id })}/>
                            <Text onPress={() => viewComments({ post_id: posts.post_id })} style={{color: 'black'}}>{posts.comment_count}</Text>
                        </View>
                        <View style={styles.activityBtn}>
                            <IconFont name={"share"} size={18} style={{ padding: 13, color: 'black' }} />
                            <Text></Text>
                        </View>
                    </View>
                    <View style={styles.view_comments1}>
                        <Image style={{ width: 33, height: 33, borderRadius: 35 / 2, left: 2, }} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginLeft: '5%', bottom: '2%' }}>{posts.user_name}</Text>
                            <View style={{ top: '2%', alignItems: 'flex-start', marginLeft: '5%', }}>
                                <Text style={{ color: 'black' }}>Wow cool post, love it!</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_comments1}>
                        <Image style={{ width: 33, height: 33, borderRadius: 35 / 2, left: 2, }} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginLeft: '5%', bottom: '2%' }}>{posts.user_name}</Text>
                            <View style={{ top: '2%', alignItems: 'flex-start', marginLeft: '5%', }}>
                                <Text style={{ color: 'black' }}>I love you please go out with me</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 20, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => viewComments({ post_id: posts.post_id })}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                                ...view all comments
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.commentBox, styles.flexViewComment]}>
                        <Image style={{ width: 35, height: 35, borderRadius: 35 / 2, left: 2, }} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
                        <TextInput onChangeText={(text) => {
                            setComment(text)
                        }} value={getComment} style={{ flexBasis: '80%', height: 40, }} placeholder="Write your comment..." />
                        <TouchableOpacity style={{ width: 25, height: 28, right: 8, }} onPress={() => comment_post({ post_id: posts.post_id })}>
                            <FontAwesome name={"chevron-circle-right"} size={28} style={{ color: 'blue' }}  />
                        </TouchableOpacity>
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
        top: 20,
        //   height: '70%',
        height: 550,
        //   borderBottomColor: '#bbb', 
        //   borderBottomWidth: 2.5,
        borderRadius: 20,
        backgroundColor: 'gainsboro',
        marginBottom: 25,
        elevation: 5
    },
    head: {
        //   flex: 1,
        // top: '8%',
        // backgroundColor: 'red'
    },
    body: {
        flex: 2,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        //   backgroundColor:'blue'
        //   top: 20
    },
    footer: {
        flex: 2,
        bottom: 5,
        marginBottom: 10,
        //   backgroundColor:'red'
    },
    flexView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexViewActivityBtn: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        // right: 15,
        // bottom: 10
        flex: 1
    },
    flexViewComment: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, borderRadius: 30,
        borderColor: 'gray',
        // left: '10%',
        // backgroundColor: 'blue'
    },
    activities: {
        justifyContent: 'space-evenly',
        height: 30,
        width: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        // borderBottomWidth: 0.5,
        // marginBottom: 10,
        // right: 15,
        bottom: 10,
        flex: 1

    },
    commentBox: {
        //   flex: 1,
        justifyContent: 'space-around',
        marginLeft: '4%'
        //   marginTop: 5,
        //   alignItems: 'center'
        //   backgroundColor: 'red',
    },
    user: {
        //   flex: 2,
        justifyContent: 'space-around'
    },
    details: {
        //   flex:1,
        marginLeft: 15,
        //   paddingTop: 30
        // top: 20
    },
    activityBtn: {
        flex: 2,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    view_comments: {
        flex: 1,
        marginLeft: 15,
        width: "90%",
        //   bottom: '3%',
        //   marginBottom: '3%',
        //   backgroundColor: 'white',
        //   borderBottomColor: '#bbb', 
        //   borderBottomWidth: 1, 
        flexDirection: 'row',
        alignItems: 'center',
    },
    view_comments1: {
        flex: 1,
        marginLeft: 15,
        width: "90%",
        //   bottom: '3%',
        //   marginBottom: '3%',
        // backgroundColor: 'white',
        //   borderBottomColor: '#bbb', 
        //   borderBottomWidth: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }
});

