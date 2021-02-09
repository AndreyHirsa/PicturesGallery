import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { resetSuccessMessage, signUp } from 'redux/actions/signUpActions';
import styles from './style.module.css';
import {
    useErrorMessageState,
    useSignUpState,
} from 'redux/selectors/stateSelectors';

export const SignUpForm: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errorMessage = useErrorMessageState();
    const successMessage = useSignUpState();
    const dispatch = useDispatch();

    function emailHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setEmail(e.target.value);
    }

    function passwordHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setPassword(e.target.value);
    }

    function signUpUser(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        e.preventDefault();
        dispatch(resetSuccessMessage());
        dispatch(signUp(email, password));
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
                    className={styles.formInput}
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={emailHandler}
                    type="email"
                    required
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={passwordHandler}
                    type="password"
                    required
                />
                {successMessage ? (
                    <span className={styles.successMessage}>
            you have successfully registered!
                    </span>
                ) : (
                    <span className={styles.message}>{errorMessage}</span>
                )}
                <Button onClick={signUpUser}>Sign Up</Button>
            </form>
        </div>
    );
};
