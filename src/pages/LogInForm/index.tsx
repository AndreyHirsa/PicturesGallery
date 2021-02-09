import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/actions/userStateActions';
import styles from './style.module.css';
import { useErrorMessageState } from 'redux/selectors/stateSelectors';

export const LogInForm: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const errorMessage = useErrorMessageState();

    function emailHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setEmail(e.target.value);
    }

    function passwordHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setPassword(e.target.value);
    }

    function logInUser(): void {
        dispatch(logIn(email, password));
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
                <span className={styles.message}>{errorMessage}</span>
                <Button onClick={logInUser}>Log in</Button>
            </form>
        </div>
    );
};
