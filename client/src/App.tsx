import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { baseUrl } from './utils/ini';

import Notification from './common/Notification';
import Dashboard from './layout/Dashboard';
import LoginForm from './layout/LoginForm';
import RegisterForm from './layout/RegisterForm';

import styles from './css/basic.module.css';

function App() {
  
  const { isAuth } = useSelector((state:any) => state.auth);

  const logoutHandler = () => {
      localStorage.removeItem('jwtToken');
      window.location.href = '/';
  }
  return (
    <div className={styles['app-box']}>
      <Notification/>
        <BrowserRouter basename={ baseUrl }>
            <div className={styles["menu-box"]}>
                { !isAuth && <Link to="/register/">Rejestracja</Link> }
                { !isAuth && <Link to="/">Logowanie</Link> }
                { isAuth && <button onClick={logoutHandler}>Wyloguj</button> }
            </div>
            <Routes>
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/register/" element={<RegisterForm />} />
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
