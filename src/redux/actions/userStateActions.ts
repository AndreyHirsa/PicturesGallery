import { UserStateActionsType } from 'interfaces/IUserStateActions';

import {
    LOG_IN_SUCCESS,
    LOG_IN,
    SIGN_OUT,
} from './constants';

export const logInSuccess = (user:Record<string, unknown>):UserStateActionsType => ({
    type: LOG_IN_SUCCESS,
    payload: {
        user,
    },
});

export const logIn = (email: string, password: string):UserStateActionsType => ({
    type: LOG_IN,
    payload: {
        email,
        password,
    },
});

export const signOut = ():UserStateActionsType => ({
    type: SIGN_OUT,
    payload: null,
});
