import { LOG_IN, LOG_IN_SUCCESS, SIGN_OUT } from 'redux/actions/constants';

export interface ILogInSuccess {
  type: typeof LOG_IN_SUCCESS;
  payload: {
    user: Record<string, unknown>;
  };
}

export interface ILogIn {
  type: typeof LOG_IN;
  payload: {
    email: string;
    password: string;
  };
}

export interface ISignOut {
  type: typeof SIGN_OUT;
  payload: null;
}

export type UserStateActionsType = ILogInSuccess | ISignOut | ILogIn;
