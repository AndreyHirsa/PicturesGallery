import React, { useState } from "react";
import styles from "./FormsContainerStyles.module.css";
import { IFormsContainer } from "interfaces/IFormsContainer";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "redux/actions/actions";

export const FormsContainer: React.FC<IFormsContainer> = ({
  currentForm,
  setModalActive,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const message = useSelector((state) => state);

  const dispatch = useDispatch();

  function emailHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function passwordHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function signUpUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(message);
    e.preventDefault();
    dispatch(signUp(email, password));
  }

  function logInUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(message);
    dispatch(logIn(email, password));
  }

  return (
    <form className={styles.form}>
      <button
        type="button"
        onClick={() => setModalActive(false)}
        className={styles.buttonClose}
      ></button>
      <input value={email} onChange={emailHandler} type="email" />
      <input value={password} onChange={passwordHandler} type="password" />
      {currentForm ? (
        <div>
          <button onClick={signUpUser} type="button">
            Sign Up
          </button>
          <span>{message}</span>
        </div>
      ) : (
        <div>
          <button onClick={logInUser}>Log In</button>
          <span>{message}</span>
        </div>
      )}
    </form>
  );
};
