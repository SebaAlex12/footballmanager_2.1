import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUserData } from '../store/auth/auth-actions';

const RegisterForm = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ password2, setPassword2 ] = useState("");

    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('submit handler');
        dispatch(registerUserData({ name: name, email: email, password:password, password2: password2 }));
    }

    return (
        <div className="register-box">
            <h1>Rejestracja klubowicza</h1>
            <form action="" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Imię nazwisko / Nickname</label>
                    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Adres email</label>
                    <input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Hasło logowania</label>
                    <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Potwierdź hasło</label>
                    <input type="password" name="password2" value={password2} onChange={(event) => setPassword2(event.target.value)}/>
                </div>
                <button>Wyślij</button>
            </form>
        </div>
    )
}
export default RegisterForm;