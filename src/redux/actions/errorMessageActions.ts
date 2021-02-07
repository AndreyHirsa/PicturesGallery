import {
    SIGN_UP_FAILURE,
    LOG_IN_FAILURE,
    RESET_ERROR_MESSAGE,
} from "./constants";

export const signUpFailure = (message: string) => {
    return {
        type: SIGN_UP_FAILURE,
        payload: {
            message,
        },
    };
};

export const logInFailure = (message: string) => {
    return {
        type: LOG_IN_FAILURE,
        payload: {
            message,
        },
    };
};

export const resetErrorMessage = () => {
    return {
        type: RESET_ERROR_MESSAGE,
        payload: "",
    };
};
