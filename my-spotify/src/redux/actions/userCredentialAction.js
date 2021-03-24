import { userCredentialsConstant } from '../constants/userCredentials';

export const saveAccessToken = (access_token) => {
    console.log("Dispatch ", access_token);
    return {
        type: userCredentialsConstant.SAVE,
        playload: access_token
    };
};

export const deleteAccessToken = () => {
    return {
        type: userCredentialsConstant.DELETE
    };
};

export const modifyAccessToken = (access_token) => {
    return {
        type: userCredentialsConstant.MODIFY,
        playload: access_token
    }
}