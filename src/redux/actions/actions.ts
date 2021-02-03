export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const SIGN_UP_FAILURE="SIGN_UP_FAILURE";
export const LOG_IN_FAILURE="LOG_IN_FAILURE";

export interface ISignUp {
  type: typeof SIGN_UP;
  payload: {
    email: string;
    password: string;
  };
}

export interface ILogIn {
  type: typeof LOG_IN;
  payload: {
    email: string;
    password: string;
  };
}

export interface ISignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
  payload: {
    user: any;
  };
}

export interface ISignUpFailure {
    type:typeof SIGN_UP_FAILURE;
    payload:{
        message:any;
    }
}

export interface ILogInSuccess {
  type: typeof LOG_IN_SUCCESS;
  payload: {
    user: any;
  };
}

export interface ILogInFailure{
    type: typeof LOG_IN_FAILURE;
    payload:{
        message:any
    }
}

export const signUp = (email: string, password: string): ActionTypes => {
  return {
    type: SIGN_UP,
    payload: {
      email,
      password,
    },
  };
};

export const signUpSuccess = (user: any):ActionTypes => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      user,
    },
  };
};

export const signUpFailure=(message:any)=>{
    return{
        type: SIGN_UP_FAILURE,
        payload:{
            message
        }
    }
}


export const logInSuccess = (user: any):ActionTypes => {
  return {
    type: LOG_IN_SUCCESS,
    payload: {
      user,
    },
  };
};


export const logInFailure=(message:any)=>{
    return{
        type: LOG_IN_FAILURE,
        payload:{
            message
        }
    }
}

export const logIn = (email: string, password: string): ActionTypes => {
  return {
    type: LOG_IN,
    payload: {
      email,
      password,
    },
  };
};


export type ActionTypes = ISignUp | ILogIn | ISignUpSuccess | ILogInSuccess | ISignUpFailure | ILogInFailure;
