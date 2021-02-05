import { SIGN_UP } from "./constants";

export const signUp = (email: string, password: string) => {
    return {
      type: SIGN_UP,
      payload: {
        email,
        password,
      },
    };
  };