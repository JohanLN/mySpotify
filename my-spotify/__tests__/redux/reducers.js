import userCredentialsReducer from '../../src/redux/reducers/userCredentialsReducer';
import { saveAccessToken, modifyAccessToken, deleteAccessToken } from '../../src/redux/actions/userCredentialAction';

describe("Tests on redux reducers", () => {

    it("should return the initial state ", () => {
        expect(userCredentialsReducer(undefined, {})).toEqual("")
    })

    it("should return an access token", () => {
        const access_token = "anAccessToken";

        expect(userCredentialsReducer(undefined, saveAccessToken(access_token))).toEqual("anAccessToken");
    })

    it("should modify the actual access_token", () => {
        const access_token = "anAccessToken";

        expect(userCredentialsReducer(undefined, saveAccessToken(access_token))).toEqual("anAccessToken");

        const new_access_token = "aNewOne";

        expect(userCredentialsReducer(undefined, modifyAccessToken(new_access_token))).toEqual("aNewOne");
    })

    it("should delete the access_token", () => {
        const access_token = "anAccessToken";

        expect(userCredentialsReducer(undefined, saveAccessToken(access_token))).toEqual("anAccessToken");

        expect(userCredentialsReducer(undefined, deleteAccessToken())).toEqual("");
    })
})