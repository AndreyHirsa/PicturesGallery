import {ErrorMessageActionsType} from "interfaces/IErrorMessageActions";
import {LOG_IN_FAILURE, RESET_ERROR_MESSAGE, SIGN_UP_FAILURE} from "redux/actions/constants"

export const errorMessage: string = "";

export function errorMessageReducer(state = errorMessage, action: ErrorMessageActionsType) {
    switch (action.type) {
        case SIGN_UP_FAILURE:
            return action.payload.message;
        case LOG_IN_FAILURE:
            return action.payload.message;
        case RESET_ERROR_MESSAGE:
            return action.payload
        default:
            return state;
    }
}
