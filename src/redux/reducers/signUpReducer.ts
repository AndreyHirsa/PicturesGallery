import { SignUpActionsType } from 'interfaces/ISignUpActions';

export const signUpState= false;

export const signUpReducer = (
    state = signUpState,
    action: SignUpActionsType
): true | false => {
    switch (action.type) {
    case 'SIGN_UP_SUCCESS':
        return action.payload;
    case 'RESET_SUCCESS_MESSAGE':
        return action.payload;
    default:
        return state;
    }
};
