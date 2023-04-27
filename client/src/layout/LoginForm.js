import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { authSlice } from '../store/index';
import '../css/login.css';

const LoginForm = () => {
    const login = useRef();
    const password = useRef();

    const dispatch = useDispatch();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('ref',login.current.value);
        dispatch(authSlice.actions.login());
    }

    console.log('login render...');

    return (
        <div className="login-box">
            <form onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label>Podaj login:</label>
                    <input type="text" ref={login}/>
                </div>
                <div className="form-group">
                    <label>Podaj hasło:</label>
                    <input type="text" ref={password}/>
                </div>
                <div className="actions">
                    <button>Wyślij</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;