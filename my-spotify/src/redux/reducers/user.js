import { userConst } from '../constants/constants';

let initialState = {
    access_token: "",
    userData: {},
    userDataTops: {},
    userPlaylistData: {},
    userRecentlyPlayed: {},
    searches: {},
    selectedTrack: {},
    topTracks: {},
    selectedPlaylist: {},
    selectedArtist: {}
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
                access_token: "",
                userData: {},
                userPlaylistData: {},
                searches: {}
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
        case userConst.GET_USER_TOPS:
            return {
                ...state,
                userDataTops: action.payload
            }
        case userConst.SELECTED_TRACK:
            return {
                ...state,
                selectedTrack: action.payload
            }
        case userConst.GET_ARTIST_TOP_TRACKS:
            return {
                ...state,
                topTracks: action.payload
            }
        case userConst.GET_PLAYLIST:
            return {
                ...state,
                selectedPlaylist: action.payload
            }
        case userConst.GET_ARTIST:
            return {
                ...state,
                selectedArtist: action.payload
            }
        case userConst.CLEAR_SELECTED_TRACK:
            return {
                ...state,
                selectedTrack: {},
                topTracks: {},
                searches: {}
            }
        default:
            return {
                ...state
            }
    }

}

export default user;