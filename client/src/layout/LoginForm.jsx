import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUserData } from '../store/auth-slice';
import styles from '../css/login.module.css';

const LoginForm = () => {
    const email = useRef();
    const password = useRef();

    const dispatch = useDispatch();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('ref',email.current.value);
        dispatch(fetchUserData({
            email: email.current.value,
            password: password.current.value
        }));
    }

    console.log('login render...');

    return (
        <div className={styles['login-box']}>
            <form onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label>Podaj login:</label>
                    <input type="text" ref={email}/>
                </div>
                <div className="form-group">
                    <label>Podaj hasło:</label>
                    <input type="text" ref={password}/>
                </div>
                <div className={styles.actions}>
                    <button>Wyślij</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;