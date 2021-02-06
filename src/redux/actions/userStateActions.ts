import {
    LOG_IN_SUCCESS,
    LOG_IN,
    SIGN_OUT
} from "./constants";

export const logInSuccess = (user: null | object) => {
    return {
        type: LOG_IN_SUCCESS,
        payload: {
            user,
        },
    };
};

export const logIn = (email: string, password: string) => {
    return {
        type: LOG_IN,
        payload: {
            email,
            password,
        },
    };
};


export const signOut=()=>{
    return{
        type:SIGN_OUT,
        payload:null
    }
}
