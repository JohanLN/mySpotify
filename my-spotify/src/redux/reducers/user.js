import { userConst } from '../constants/constants';

let initialState = {
    access_token: "",
    userData: {},
    userPlaylistData: {},
    userRecentlyPlayed: {},
    searches: {}
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case userConst.GET_ACCESS_TOKEN:
            return {
                ...state,
                access_token: action.payload
            }
        case userConst.DELETE_ACCESS_TOKEN:
            return {
                ...state,
                access_token: ""
            }
        case userConst.GET_USER:
            return {
                ...state,
                userData: action.payload
            }
        case userConst.GET_USER_PLAYLIST:
            return {
                ...state,
                userPlaylistData: action.payload
            }
        case userConst.GET_USER_RECENTLY_PLAYED:
            return {
                ...state,
                userRecentlyPlayed: action.payload
            }
        case userConst.SEARCH:
            return {
                ...state,
                searches: action.payload
            }
        default:
            return {
                ...state
            }
    }

}

export default user;