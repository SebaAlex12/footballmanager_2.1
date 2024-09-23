import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { checkUserData } from '../store/auth/auth-actions';
import styles from '../css/login.module.css';

const LoginForm = () => {

    const dispatch = useDispatch();
    
    const email = useRef();
    const password = useRef();
    const { isAuth, token } = useSelector(state=>state.auth);

    const navigate = useNavigate();

    if(isAuth && token.trim().length > 0){
        localStorage.setItem('jwtToken',token);
        navigate('/dashboard');
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(checkUserData({
            email: email.current.value,
            password: password.current.value
        }));
    }


    return (
        <div className={styles['login-box']}>
            <form onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label>Podaj login:</label>
                    <input type="text" ref={email}/>
                </div>
                <div className="form-group">
                    <label>Podaj hasło:</label>
                    <input type="password" ref={password}/>
                </div>
                <div className={styles.actions}>
                    <button>Wyślij</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;