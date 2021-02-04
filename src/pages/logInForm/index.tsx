import { Button,TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "redux/actions/actions";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom";
import React from 'react'

export const LogInForm: React.FC = () => {
  let user = useSelector((state: any) => state.loginReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const message = useSelector((state:any)=>state.errorMessageReducer)

  const dispatch = useDispatch();

  function emailHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function passwordHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function logInUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(logIn(email, password))
  }

  if(user){
    return <Redirect push to="/"/>
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <Link to="/">
          <button type="button" className={styles.close}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </Link>
        <TextField required={true}
          className={styles.formInput}
          label="Email"
          variant="outlined"
          value={email}
          onChange={emailHandler}
          type="email"
        />
        <TextField required={true}
          label="Password"
          variant="outlined"
          value={password}
          onChange={passwordHandler}
          type="password"
        />
        <span className={styles.message}>{message}</span>
        <Button onClick={logInUser}>Log in</Button>
      </form>
    </div>
  );
};
