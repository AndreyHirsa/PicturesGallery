import { AppBar, Button, Toolbar } from "@material-ui/core";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetErrorMessage } from "redux/actions/errorMessageActions";
import { signOut } from "redux/actions/signOutActions";

export const HeaderNavigation = () => {
  let user = useSelector((state:any) => state.loginReducer);

  const dispatch = useDispatch();

  const [userState, setUserState] = useState(user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserState(user);
    });
  });

  const signout = () => {
    dispatch(signOut());
  };

  const resetMessage = () => {
    dispatch(resetErrorMessage());
  };

  return (
    <AppBar position="static">
      {userState ? (
        <Toolbar>
          <Link to="/">
            <Button onClick={signout}>Log Out</Button>
          </Link>
          <Link to="/start_drawing">
            <Button>Start drawing</Button>
          </Link>
        </Toolbar>
      ) : (
        <Toolbar>
          <Link to="/login">
            <Button onClick={resetMessage}>Log in</Button>
          </Link>
          <Link to="/signup">
            <Button onClick={resetMessage}>Sign Up</Button>
          </Link>
        </Toolbar>
      )}
    </AppBar>
  );
};
