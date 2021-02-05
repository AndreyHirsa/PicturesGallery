import { SIGN_OUT, SIGN_OUT_FAILURE } from "redux/actions/constants";

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const signOutFailure = (message: string) => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: {
      message,
    },
  };
};
