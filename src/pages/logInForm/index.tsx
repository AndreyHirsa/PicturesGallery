import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import {createSelectorHook, useDispatch, useSelector} from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { Link, Redirect } from 'react-router-dom';
import { logIn } from 'redux/actions/userStateActions';
import styles from './style.module.css';
import {RootState} from "interfaces/RootStateType";

export const LogInForm: React.FC = ():JSX.Element => {

    const useSelector = createSelectorHook<RootState>()
    const user = useSelector(state => state?.userStateReducer);
    const message = useSelector(state => state.errorMessageReducer);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    function emailHandler(e: React.ChangeEvent<HTMLInputElement>):void {
        setEmail(e.target.value);
    }

    function passwordHandler(e: React.ChangeEvent<HTMLInputElement>):void {
        setPassword(e.target.value);
    }

    function logInUser():void {
        dispatch(logIn(email, password));
    }

    if (user) {
        return <Redirect push to="/" />;
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <Link to="/">
                    <button type="button" className={styles.close}>
                        <CloseIcon className={styles.closeIcon} />
                    </button>
                </Link>
                <TextField
                    required
                    className={styles.formInput}
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={emailHandler}
                    type="email"
                />
                <TextField
                    required
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
