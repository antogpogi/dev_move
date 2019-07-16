import React, { useState, useEffect} from 'react'
import Search from './Search';
import axios from 'axios';
import {site_url} from '../../../../../constants';
import { connect } from 'react-redux';

const SearchScreen = ({navigation, session}) => {
    const [Selection, setSelection] = useState("top");
    const [TextSearch, setTextSearch] = useState("");
    const userData = session.user.data;

    const [Data, setData] = useState([])

    const serviceSearch = async (type, search) => {
        if(search != ""){
            let formBod = new FormData();
            formBod.append("page", 1);
            formBod.append("type", type)
            formBod.append("search", search)
            const res = await axios({
                method:'post',
                url: site_url + '/service/search',
                data: formBod,
                headers:{
                    "API-KEY" : "yolo@|-||_!$",
                    "TOKEN" : userData.token
                }
            })
            setData(res.data.data);
            console.log(res)   
        }
    }

    const viewOtherProfile = (data) => {
        navigation.navigate("ViewProfile", {
            payload: {
                user_id: data.id
            }
        })
    }

    useEffect(() => {
        serviceSearch(Selection, TextSearch)
    }, [Selection, TextSearch])

    const goBack = () => {
        navigation.goBack()
    }

    return (
       <Search setSelection={setSelection} setTextSearch={setTextSearch} viewOtherProfile={viewOtherProfile} Selection={Selection} goBack={goBack} Data={Data} />
    )
}

const mapStateToProps = state => {
    return{
        session: state.application.session
    }
}

export default connect(mapStateToProps, null)(SearchScreen) 
