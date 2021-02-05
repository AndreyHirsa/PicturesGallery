import { SIGN_UP } from "redux/actions/constants";

export interface ISignUp {
  type: typeof SIGN_UP;
  payload: {
    email: string;
    password: string;
  };
}

export type SignUpActionsType=ISignUp
