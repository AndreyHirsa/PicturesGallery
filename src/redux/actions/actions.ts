export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const SIGN_UP_FAILURE="SIGN_UP_FAILURE";
export const LOG_IN_FAILURE="LOG_IN_FAILURE";
export const SIGN_OUT_SUCCESS="SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE="SIGN_OUT_FAILURE";
export const SIGN_OUT="SIGN_OUT"

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


export const signOutSuccess=(data:any)=>{
  return{
    type:SIGN_OUT_SUCCESS,
    payload:{
      data
    }
  }
}   


export const signOutFailure=(message:string)=>{
  return{
    type:SIGN_OUT_FAILURE,
    payload:{
      message
    }
  }
} 


export const signOut=()=>{
  return{
    type:SIGN_OUT
  }
}




export interface ISignOutSuccess{
  type: typeof SIGN_OUT_SUCCESS;
  payload: {
    data: any;
  };
}

export interface ISignOutFailure{
    type: typeof SIGN_OUT_FAILURE;
    payload:{
        message:string
    }
}




export const signUpSuccess = (user: object):ActionTypes => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      user,
    },
  };
};

export const signUpFailure=(message:string)=>{
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


export type ActionTypes = ISignUp | ILogIn | ISignUpSuccess | ILogInSuccess | ISignUpFailure | ILogInFailure | ISignOutFailure | ISignOutSuccess;
