
import { ActionTypes, LOG_IN_SUCCESS } from "redux/actions/actions";

export let userState:object={}


export function loginReducer(state=userState, action: ActionTypes) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
