import { userCredentialsConstant } from "../constants/userCredentials";

const userCredentialsReducer = (state = "", action) => {
    console.log("Any action ?",action.type);
    switch (action.type) {
        case userCredentialsConstant.SAVE:
            return state + action.playload;
        case userCredentialsConstant.DELETE:
            return state;
        case userCredentialsConstant.MODIFY:
            return state + action.playload;
        default:
            return state;
    };
};

export default userCredentialsReducer;