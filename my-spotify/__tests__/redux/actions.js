import { saveAccessToken } from '../../src/redux/actions/userCredentialAction';
import { userCredentialsConstant } from '../../src/redux/constants/userCredentials';

describe("Tests on redux actions", () => {

    it("test the saveAccessToken action", () => {
        const token = "a token";
        const expectedAction = {
            type: userCredentialsConstant.SAVE,
            playload: token
        }
        expect(saveAccessToken(token)).toEqual(expectedAction);
    })

})