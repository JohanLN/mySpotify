import { userCredentialsConstant } from '../constants/userCredentials';
import { getTokenFromURL } from '../../redux/services/services';

export const deleteAccessToken = () => {
    return {
        type: userCredentialsConstant.DELETE
    };
};

export const getAccessToken = () => {
    const access_token = getTokenFromURL().access_token;
    return {
        type: userCredentialsConstant.GET,
        playload: access_token
    }
}