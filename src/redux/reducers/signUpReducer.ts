import { SignUpActionsType } from 'interfaces/ISignUpActions';
import {
    RESET_SUCCESS_MESSAGE,
    SIGN_UP_SUCCESS,
} from 'redux/actions/constants';


// eslint-disable-next-line
export let signUpInitialState:true | false = false;

export const signUpReducer = (
    state = signUpInitialState,
    action: SignUpActionsType
): typeof signUpInitialState => {
    switch (action.type) {
    case SIGN_UP_SUCCESS:
        return action.payload;
    case RESET_SUCCESS_MESSAGE:
        return action.payload;
    default:
        return state;
    }
};
