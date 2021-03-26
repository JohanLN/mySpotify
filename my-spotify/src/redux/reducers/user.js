import { userConst } from '../constants/constants';

let initialState = {
    access_token: "",
    userData: {}
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
        default:
            return {
                ...state
            }
    }

}

export default user;