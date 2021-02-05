import { LOG_IN_SUCCESS,LOG_IN } from "./constants";

export const logInSuccess = (user: null | object) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const logIn = (email: string, password: string) => {
  return {
    type: LOG_IN,
    payload: {
      email,
      password,
    },
  };
};  

