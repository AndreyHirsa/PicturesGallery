import { LoginActionsType } from "interfaces/ILogInActions";
import { LOG_IN_SUCCESS } from "redux/actions/constants";

export let userState: null | object = null;

export function loginReducer(state = userState, action: LoginActionsType) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
