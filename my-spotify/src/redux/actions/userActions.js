import axios from 'axios';
import { userConst } from '../constants/constants';

export const getTokenFromURL = () => { 
    let access_token = window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
    }, {});

    console.log("test on getToken", access_token);
    return {
        type: userConst.GET_ACCESS_TOKEN,
        payload: access_token.access_token
    };
};

export const getUsername = (access_token) => {
    return (dispatch) => {
        axios.get("https://api.spotify.com/v1/me", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            console.log("SUCCESS", response)
            dispatch({
                type: userConst.GET_USER,
                payload: response.data.display_name
            })
        }).catch(err => {
            console.log("ERROR", err)
        })    
    };
};

export const signOut = () => {
    return {
        type: userConst.DELETE_ACCESS_TOKEN,
    };
};