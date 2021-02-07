import {Button, TextField} from "@material-ui/core";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./style.module.css";
import {Link} from "react-router-dom";
import {resetSuccessMessage, signUp} from "redux/actions/signUpActions";
import React from "react";

export const SignUpForm: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const message = useSelector((state: any) => state.errorMessageReducer);
    const successMessage = useSelector((state: any) => state.signUpReducer);
    const dispatch = useDispatch();

    function emailHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function passwordHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function signUpUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        dispatch(resetSuccessMessage())
        dispatch(signUp(email, password));
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <Link to='/'>
                    <button type='button' className={styles.close}>
                        <CloseIcon className={styles.closeIcon}/>
                    </button>
                </Link>
                <TextField
                    className={styles.formInput}
                    label='Email'
                    variant='outlined'
                    value={email}
                    onChange={emailHandler}
                    type='email'
                    required={true}
                />
                <TextField
                    label='Password'
                    variant='outlined'
                    value={password}
                    onChange={passwordHandler}
                    type='password'
                    required={true}
                />
                {successMessage ? <span className={styles.successMessage}>you have successfully registered!</span> :
                    <span className={styles.message}>{message}</span>}
                <Button onClick={signUpUser}>Sign Up</Button>
            </form>
        </div>
    );
}

