import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetErrorMessage } from 'redux/actions/errorMessageActions';
import { signOut } from 'redux/actions/userStateActions';
import { userState } from 'redux/reducers/userStateReducer';

export const HeaderNavigation = (): JSX.Element => {
    const user = useSelector(
        (state: typeof userState) => state?.userStateReducer
    );
    const dispatch = useDispatch();

    const signOutFn = () => {
        dispatch(signOut());
    };

    const resetMessage = () => {
        dispatch(resetErrorMessage());
    };

    return (
        <AppBar position="static">
            {user ? (
                <Toolbar>
                    <Link to="/">
                        <Button onClick={signOutFn}>Log Out</Button>
                    </Link>
                    <Link to="/start_drawing">
                        <Button>Start drawing</Button>
                    </Link>
                    <Link to="/gallery">
                        <Button>Gallery</Button>
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
