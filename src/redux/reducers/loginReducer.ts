import {ActionTypes, LOG_IN_SUCCESS, SIGN_OUT_SUCCESS} from "redux/actions/actions";

export let userState: null | object = null


export function loginReducer(state = userState, action: ActionTypes) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            return action.payload;
        case SIGN_OUT_SUCCESS:
            return null;
        default:
            return state;
    }
}
