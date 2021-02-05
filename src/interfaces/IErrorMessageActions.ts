import {
  SIGN_UP_FAILURE,
  LOG_IN_FAILURE,
  RESET_ERROR_MESSAGE,
} from "redux/actions/constants";

export interface ISignUpFailure {
  type: typeof SIGN_UP_FAILURE;
  payload: {
    message: string;
  };
}

export interface ILogInFailure {
  type: typeof LOG_IN_FAILURE;
  payload: {
    message: string;
  };
}

export interface IResetErrorMessage {
  type: typeof RESET_ERROR_MESSAGE;
  payload: {
    message: undefined;
  };
}

export type ErrorMessageActionsType = ILogInFailure | ISignUpFailure | IResetErrorMessage;
