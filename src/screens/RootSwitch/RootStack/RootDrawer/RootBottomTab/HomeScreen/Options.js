import React, { Component, useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import IconFont from 'react-native-vector-icons/FontAwesome';

export default function Options({visible, setVisible, post_id}) {

    const styles = StyleSheet.create({
        modalBackground: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: 'red'
        },
        activityIndicatorWrapper: {
            backgroundColor: '#FFFFFF',
            height: 115,
            width: 300,
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
        },
        touchView:{
            flex: 3, 
            display: 'flex', 
            flexDirection:'row',
            alignItems:'center', 
            justifyContent:'center', 
            width:"100%"
        }
    })

    const closeModal = () => {
        setVisible(false)
    }

    return (
        <Portal>
            <Modal 
                contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
                transparent={true} 
                visible={visible}
                dismissable={true}
                onDismiss={() => {closeModal()}}
                >
                        {/* <View style={styles.modalBackground}> */}
                                <View style={styles.activityIndicatorWrapper}>
                                    <TouchableOpacity style={styles.touchView} onPress={() => alert("Edit" + post_id)}>
                                        <IconFont name="edit" style={{marginRight: 7}} />
                                        <Text>Edit Post</Text>
                                    </TouchableOpacity>
                                    <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "black", width: 250}}></View> 
                                    <TouchableOpacity style={styles.touchView} onPress={() => alert("Delete" + post_id)}>
                                        <IconFont name="trash-o" style={{marginRight: 7}} />
                                        <Text>Delete Post</Text>
                                    </TouchableOpacity>
                                </View>    
                        {/* </View> */}
                </Modal>
        </Portal>
    )
}
