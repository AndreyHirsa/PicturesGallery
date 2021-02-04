import { AppBar, Button, Toolbar } from "@material-ui/core";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut} from "redux/actions/actions";



export const HeaderNavigation = () => {
  let user = useSelector((state: any) => state.loginReducer);

  const dispatch= useDispatch()

  const signout=()=>{
    dispatch(signOut())
  }

  console.log(!!user)

  return (
    <AppBar position="static">
      {user? (
        <Toolbar>
          <Button onClick={signout}>Log Out</Button>
        </Toolbar>
      ) : (
        <Toolbar>
          <Link to="/login">
            <Button>Log in</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </Toolbar>
      )}
    </AppBar>
  );
};
