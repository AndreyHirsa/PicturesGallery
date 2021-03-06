import { ErrorMessageActionsType, ILogInFailure, ISignUpFailure } from 'interfaces/IErrorMessageActions';
import {
    SIGN_UP_FAILURE,
    LOG_IN_FAILURE,
    RESET_ERROR_MESSAGE,
} from './constants';

export const signUpFailure = (message:ISignUpFailure['payload']):ErrorMessageActionsType => ({
    type: SIGN_UP_FAILURE,
    payload:message
});

export const logInFailure = (message:ILogInFailure['payload']):ErrorMessageActionsType => ({
    type: LOG_IN_FAILURE,
    payload:message
});

export const resetErrorMessage = ():ErrorMessageActionsType => ({
    type: RESET_ERROR_MESSAGE,
    payload:'',
});
