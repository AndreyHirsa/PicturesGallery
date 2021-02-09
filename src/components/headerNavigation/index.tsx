import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetErrorMessage } from 'redux/actions/errorMessageActions';
import { signOut } from 'redux/actions/userStateActions';
import { useUserState } from 'redux/selectors/stateSelectors';

export const HeaderNavigation: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const signOutFn = (): void => {
        dispatch(signOut());
    };

    const resetMessage = (): void => {
        dispatch(resetErrorMessage());
    };

    const user = useUserState();

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
