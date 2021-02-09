import { LOG_IN_SUCCESS, SIGN_OUT } from 'redux/actions/constants';
import { UserStateActionsType } from 'interfaces/IUserStateActions';

export const userInitialState: null | Record<string, unknown> = null;

export function userStateReducer(
    state = userInitialState,
    action: UserStateActionsType,
): typeof userInitialState {
    switch (action.type) {
    case LOG_IN_SUCCESS:
        return action.payload;
    case SIGN_OUT:
        return action.payload;
    default:
        return state;
    }
}
