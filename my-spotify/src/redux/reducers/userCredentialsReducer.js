import { userCredentialsConstant } from "../constants/userCredentials";

const userCredentialsReducer = (state = "", action) => {
    switch (action.type) {
        case userCredentialsConstant.DELETE:
            return state + ""
        case userCredentialsConstant.GET:
            return state + action.playload
        default:
            return state;
    };
};

export default userCredentialsReducer;