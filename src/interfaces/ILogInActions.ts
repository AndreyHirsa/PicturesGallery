import { LOG_IN, LOG_IN_SUCCESS } from "redux/actions/constants";

export interface ILogInSuccess {
  type: typeof LOG_IN_SUCCESS;
  payload: {
    user: object;
  };
}

export interface ILogIn {
  type: typeof LOG_IN;
  payload: {
    email: string;
    password: string;
  };
}

export type LoginActionsType = ILogInSuccess | ILogIn;
