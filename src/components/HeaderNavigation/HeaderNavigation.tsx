import { ISetModalActive } from "interfaces/ISetModalActive";
import React from "react";
import styles from "./HeaderNavigation.module.css";


export const HeaderNavigation: React.FC<ISetModalActive> = ({
  setModalActive,
  setCurrentForm,
}) => {
  function signUpFormHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setModalActive(true);
    setCurrentForm(true);
  }

  function logInFormHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setModalActive(true);
    setCurrentForm(false);
  }

  return (
    <nav className={styles.headerNav}>
      <button onClick={logInFormHandler} className={styles.buttonLogIn}>
        Log in
      </button>
      <button onClick={signUpFormHandler}>Sing Up</button>
    </nav>
  );
};
