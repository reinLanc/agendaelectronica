import { singInWithGoogle } from "../../../../src/firebase/providers";
import { login, logout } from "../../../../src/store/auth";
import { checkingAuthentication, checkingCredentials, startGoogleSignIn } from "../../../../src/store/auth/thunks";
import {demoUser} from '../../../fixtures/authFixtures';
jest.mock('../../../../src/firebase/providers');

describe('pruebas en thunks', () => {
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());


    test('debe de invocar el checkingCredentials', async () => {

        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });


    test('startGoogleSignIn debe de llamar checkingcredentials y login - exito', async() => { 
        const loginData = {ok:true,...demoUser};
        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

     });

     test('startGoogleSignIn debe de llamar checkingcredentials y logout - error', async() => { 
        const loginData = {ok:false,errorMessage:'un error en google'};
        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

     });

});