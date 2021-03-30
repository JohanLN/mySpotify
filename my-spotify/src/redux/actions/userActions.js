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
            });
        }).catch(err => {
            console.log("ERROR GET_USER", err.message)
        })    
    };
};

export const getUserTops = (access_token) => {
    let datas = {artists: {}, tracks: {}};
    return (dispatch) => {
        axios.get("https://api.spotify.com/v1/me/top/artists?limit=5", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            datas.artists = response.data;
        }).catch(err => {
            console.log("ERROR GET_USER_TOP_ARTISTS", err.message)
        })
        axios.get("https://api.spotify.com/v1/me/top/tracks?limit=5", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            datas.tracks = response.data;
            dispatch({
                type: userConst.GET_USER_TOPS,
                payload: datas
            })
        }).catch(err => {
            console.log("ERROR GET_USER_TOP_ARTISTS", err.message)
        })
    }
}

export const getUserPlaylists = (access_token) => {
    return (dispatch) => {
        axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            dispatch({
                type: userConst.GET_USER_PLAYLIST,
                payload: response.data
            });
        }).catch(err => {
            console.log("ERROR GET_USER_PLAYLIST :", err)
        });
    };
};

export const getUserRecentlyPlayed = (access_token) => {
    return (dispatch) => {
        axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            dispatch({
                type: userConst.GET_USER_RECENTLY_PLAYED,
                payload: response.data
            });
        }).catch(err => {
            console.log("ERROR GET_USER_RECENTLY_PLAYED :", err)
        });
    };
};

export const searchTrack = (access_token, search) => {
    console.log("API", search)
    return (dispatch) => {
        axios.get('https://api.spotify.com/v1/search?q=' + search + "&type=track&market=US", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            dispatch({
                type: userConst.SEARCH,
                payload: response.data
            });
        }).catch(err => {
            console.log("ERROR GET_USER_RECENTLY_PLAYED :", err)
        });
    }
}

export const signOut = () => {
    return {
        type: userConst.DELETE_ACCESS_TOKEN,
    };
};