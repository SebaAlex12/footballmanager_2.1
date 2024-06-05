import React from 'react';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { baseUrl } from './utils/ini';

import Notification from './common/Notification';
import Dashboard from './layout/Dashboard';
import LoginForm from './layout/LoginForm';
import RegisterForm from './layout/RegisterForm';

import styles from './css/basic.module.css';

function App() {
  return (
    <div className={styles['app-box']}>
      <Notification/>
        <BrowserRouter basename={ baseUrl }>
            <div className={styles["menu-box"]}>
                <Link to="/register/">Rejestracja</Link>
                <Link to="/">Logowanie</Link>
            </div>
            <Routes className="App" >
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/register/" element={<RegisterForm />} />
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
