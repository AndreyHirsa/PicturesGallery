import {RESET_SUCCESS_MESSAGE, SIGN_UP, SIGN_UP_SUCCESS} from "./constants";

export const signUp = (email: string, password: string) => {
    return {
        type: SIGN_UP,
        payload: {
            email,
            password,
        },
    };
};

export const signUpSuccess = () => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: true
    }
}

export const resetSuccessMessage = () => {
    return {
        type: RESET_SUCCESS_MESSAGE,
        payload: false
    }
}