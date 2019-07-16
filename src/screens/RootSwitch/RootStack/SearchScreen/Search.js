import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { FlatList, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import IconFont from 'react-native-vector-icons/FontAwesome';
import SearchItem from './SearchItem';

const Search = ({setSelection, setTextSearch, viewOtherProfile, Selection, goBack, Data}) => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.topNav}>
                <View style={styles.selection}>
                    <View style={{flex:1, height:"100%"}}>
                        <TouchableOpacity onPress={()=>goBack()} style={{height:"100%", justifyContent:'center', alignItems:"center"}}>
                            <IconFont name={"close"} size={18}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.selectionTouch} onPress={()=>setSelection("top")}>
                            <Text style={styles.selectionText}>Top</Text>
                        </TouchableOpacity>
                        {Selection == "top" ? <View style={styles.selectionToggle}></View> : null}
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.selectionTouch} onPress={()=>setSelection("people")}>
                            <Text style={styles.selectionText}>People</Text>
                        </TouchableOpacity>
                        {Selection == "people" ? <View style={styles.selectionToggle}></View> : null}
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.selectionTouch} onPress={()=>setSelection("tags")}>
                            <Text style={styles.selectionText}>Tags</Text>
                        </TouchableOpacity>
                        {Selection == "tags" ? <View style={styles.selectionToggle}></View> : null}
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.selectionTouch} onPress={()=>setSelection("places")}>
                            <Text style={styles.selectionText}>Places</Text>
                        </TouchableOpacity>
                        {Selection == "places" ? <View style={styles.selectionToggle}></View> : null}
                    </View>
                </View>
                <View style={styles.search}>
                    <View  style={{flexBasis:"13%", justifyContent:"center", alignItems:"center"}} >
                        <IconFont name={"search"} size={18} />
                    </View>
                    <TextInput placeholder={"Search"} style={styles.textSearch}  onChangeText={(text)=>setTextSearch(text)}/>
                </View>
            </View>
            <View style={styles.body}>
                <FlatList 
                    data={Data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => 
                        <SearchItem item={item} viewOtherProfile={viewOtherProfile}/>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    topNav:{
        height:120,
        backgroundColor:'#fff'
    },
    selection:{
        flex: 1,
        flexDirection:'row',
        alignItems:"center",
        borderBottomColor:"#010",
        borderBottomWidth:StyleSheet.hairlineWidth,
        elevation: 3
    },
    search:{
        flex:1,
        alignItems:"center",
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#ddd"
    },
    textSearch:{
        flex:1,
        marginRight:4,
        fontSize:16,
        fontWeight:"bold"
    },
    body:{
        flex:3
    },
    selectionText:{
        fontSize:14,
        fontWeight:"bold"
    },
    selectionTouch:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        height:"95%"
    },
    button:{
        flex:2,
        height:"100%"
    },
    selectionToggle:{
        flexBasis:"5%", 
        backgroundColor:"#222",
        
    }
});
