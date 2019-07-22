<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

const Comment = ({ userName, message }) => {
    return (
        <View style={styles.container}>
            <View style={styles.commentBox}>
                <View style={styles.image}>
                    <Image style={{ width: 35, height: 35, borderRadius: 35 / 2, marginRight: 8, marginLeft: 8 }} source={require('../../../../../public/images/1559644819305.jpg')} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.username}>{userName}</Text>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>{message}</Text>
                    <Text style={{ marginTop: 5 }}>5 minutes ago     Reply</Text>
                </View>
            </View>
        </View>
    );
}


export default Comment

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginBottom: 10,
    },
    commentBox: {
        top: 15,
        height: 70,
        flexDirection: 'row',
        // flexWrap: 'nowrap',
        justifyContent: 'center',
        // borderBottomColor: '#bbb',
        elevation: 5,
        backgroundColor: '#CDCBCB',
        borderRadius: 20,
        marginBottom: 7
    },
    image: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center'
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        // paddingLeft: 5,
    },
    username: {
        fontWeight: 'bold'
    }
});

