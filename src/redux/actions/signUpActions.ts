import { ISignUp, SignUpActionsType } from 'interfaces/ISignUpActions';
import { RESET_SUCCESS_MESSAGE, SIGN_UP, SIGN_UP_SUCCESS } from './constants';

export const signUp = (
    email: ISignUp['payload']['email'],
    password: ISignUp['payload']['password']
): SignUpActionsType => ({
    type: SIGN_UP,
    payload: {
        email,
        password,
    },
});

export const signUpSuccess = (): SignUpActionsType => ({
    type: SIGN_UP_SUCCESS,
    payload: true,
});

export const resetSuccessMessage = (): SignUpActionsType => ({
    type: RESET_SUCCESS_MESSAGE,
    payload: false,
});
