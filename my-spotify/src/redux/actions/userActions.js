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
    return {
        type: userConst.GET_ACCESS_TOKEN,
        payload: access_token.access_token
    };
};

export const getUser = (access_token) => {
    return (dispatch) => {
        axios.get("https://api.spotify.com/v1/me", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            dispatch({
                type: userConst.GET_USER,
                payload: response.data
            })
        }).catch(err => {
            console.log("ERROR", err.message)
        })    
    };
};

export const signOut = () => {
    return {
        type: userConst.DELETE_ACCESS_TOKEN,
    };
};