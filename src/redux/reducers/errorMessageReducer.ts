import {
  ActionTypes,
  LOG_IN_FAILURE,
  SIGN_UP_FAILURE,
} from "redux/actions/actions";


export const errorMessage:string = ""

export function errorMessageReducer(state = errorMessage, action: ActionTypes): any {
  switch (action.type) {
    case SIGN_UP_FAILURE:
      return action.payload.message;
    case LOG_IN_FAILURE:
      return action.payload.message;
    default:
      return state;
  }
}
