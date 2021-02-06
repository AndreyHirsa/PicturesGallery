import {LOG_IN_SUCCESS, SIGN_OUT} from "redux/actions/constants";
import {UserStateActionsType} from "../../interfaces/IUserStateActions";

export let userState: any = null;

export function loginReducer(state = userState, action: UserStateActionsType ) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            return action.payload;
        case SIGN_OUT:
            return action.payload
        default:
            return state;
    }
}
