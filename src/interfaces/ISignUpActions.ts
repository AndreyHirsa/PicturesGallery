import {RESET_SUCCESS_MESSAGE, SIGN_UP, SIGN_UP_SUCCESS} from "redux/actions/constants";

export interface ISignUp {
    type: typeof SIGN_UP;
    payload: {
        email: string;
        password: string;
    };
}

export interface ISignUpSuccess {
    type: typeof SIGN_UP_SUCCESS;
    payload: boolean
}

export interface IResetMessageSuccess {
    type: typeof RESET_SUCCESS_MESSAGE;
    payload: boolean
}

export type SignUpActionsType = ISignUpSuccess | IResetMessageSuccess;

