<script src="http://localhost:8081"></script>
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
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
                        <Text style={{color: 'black',}}>{moment(moment.unix(posts.insertdate).format('YYYY-MM-DD hh:mm:ss')).fromNow()}</Text>
                        <FontAwesome5 style={{ padding: 23, color: 'black' }} onPress={() => { openOption({ post_id: posts.post_id }) }} name={"ellipsis-h"} size={20} />
                    </View>
                </View>
                <View style={styles.body}>
                    {/* <Image style={{width: "100%", height: "95%", borderRadius: 10}} source={{uri: `${posts.post_media}`}} /> */}
                    <Image style={{ width: "100%", height: "100%" }} source={require('../../../../../../../public/images/IMG_20190710_111946.jpg')} />
                </View>
                <View style={styles.footer}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {posts.is_liked == "1" ?
                                <FontAwesome name={"heart"} size={21} style={{ color: "red", padding: 13, }} onPress={() => like_unlike({ post_id: posts.post_id, status: 0 })} />
                                : <Feather name={"heart"} size={21} style={{ padding: 13, color: 'black' }} onPress={() => like_unlike({ post_id: posts.post_id, status: 1 })} />
                            }
                            <Text onPress={() => viewLikes({ post_id: posts.post_id })} style={{color: 'black'}}>{posts.like_count}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name={"message-square"} size={21} style={{ padding: 13, color: 'black' }} onPress={() => viewComments({ post_id: posts.post_id })}/>
                            <Text onPress={() => viewComments({ post_id: posts.post_id })} style={{color: 'black'}}>{posts.comment_count}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <IconFont name={"share"} size={21} style={{ padding: 13, color: 'black' }} />
                        </View>
                        <View style={{flexDirection: 'row-reverse', alignItems: 'flex-end', flex: 1}}>
                            <FontAwesome name={"bookmark-o"} size={21} style={{ padding: 13, color: 'black',}} />
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{marginLeft: 15}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>{posts.user_name}</Text>
                            <View style={{}}>
                                <Text style={{ fontSize: 17, color: 'black' }}>{posts.caption}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{marginLeft: 15, flexDirection: 'row'}}>
                            <Image style={{ width: 33, height: 33, borderRadius: 35 / 2, left: 2, }} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
                            <View style={{flexDirection:'column'}}>
                                <Text style={{ marginLeft: '5%', bottom: '2%' }}>{posts.user_name}</Text>
                                <Text style={{ color: 'black', marginLeft: '5%' }}>Wow cool post, love it!</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{marginLeft: 15, flexDirection: 'row'}}>
                            <Image style={{ width: 33, height: 33, borderRadius: 35 / 2, left: 2, }} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
                            <View style={{flexDirection:'column'}}>
                                <Text style={{ marginLeft: '5%', bottom: '2%' }}>{posts.user_name}</Text>
                                <Text style={{ color: 'black', marginLeft: '5%' }}>Wow cool post, love it!</Text>
                            </View>
                        </View>
                    </View>
                </View> */}
                <View>
                    <View style={{ paddingLeft: 20, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => viewComments({ post_id: posts.post_id })}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                                ...view all comments
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{paddingLeft: 10, paddingRight: 10}}>
                    <View style={styles.flexViewComment}>
                        <Image style={{ width: 35, height: 35, borderRadius: 35 / 2, left: 1, }} source={require('../../../../../../../public/images/IMG_20190710_113534.jpg')} />
                        <TextInput onChangeText={(text) => {
                            setComment(text)
                        }} value={getComment} style={{ flexBasis: '80%', height: 40, }} placeholder="Write your comment..." />
                        <TouchableOpacity style={{ width: 25, height: 28, }} onPress={() => comment_post({ post_id: posts.post_id })}>
                            <FontAwesome name={"chevron-circle-right"} size={28} style={{ color: 'blue' }}  />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}


export default Post

const styles = StyleSheet.create({
    post: {
        // top: 20,
        height: 650,
        // borderBottomWidth: 0.5,
        // borderTopWidth: 0.5,
        // borderColor: 'lightgray',
        // marginBottom: 10,
        // elevation: 2,
    },
    head: {
        //   flex: 1,
        // top: '8%',
        // backgroundColor: 'red'
    },
    body: {
        flex: 3,
        // paddingTop: 5,
        // paddingLeft: 10,
        // paddingRight: 10,
        // //   backgroundColor:'blue'
        //   top: 20
    },
    footer: {
        // flex: 1,
        // bottom: 5,
        // marginBottom: 10,
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
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: 'gray',
        marginBottom: 15
        // left: '10%',
        // backgroundColor: 'blue'
    },
    activities: {
        // justifyContent: 'space-evenly',
        height: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        top: 5,
        // marginBottom: 5,
        flex: 1,

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
        // marginBottom: 5,
        flexDirection: 'row',
        // alignItems: 'center',
    },
    activityBtn: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    activityBtnBookMark: {
        flex: 1,
        flexDirection: 'row-reverse',
        // justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 20
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
        marginLeft: 10,
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

