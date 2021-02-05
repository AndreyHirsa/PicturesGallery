import { SIGN_OUT_FAILURE,SIGN_OUT } from "redux/actions/constants";

export interface ISignOutFailure {
  type: typeof SIGN_OUT_FAILURE;
  payload: {
    message: string;
  };
}

export interface ISignOut{
    type:typeof SIGN_OUT
}

export type SignOutActionsType = ISignOutFailure;
