import { createSlice } from '@reduxjs/toolkit';

import { uiActions } from './ui-slice';

const initialState = {
    isAuth:false
};

const AuthSlice = createSlice({
    name:'authentication',
    initialState,
    reducers: {
        login(state){
            // console.log('login reducer',current(state));
        }
    }
});

export const fetchUserData = (loginData) => {
    return async(dispatch) => {

        dispatch(authActions.login());
        // console.log('login data',loginData);
        // dispatch(uiActions.setNotification({
        //     message: 'Trwa wczytywanie użytkownika...',
        //     show: true
        // }));

        const response = await fetch('/api/users/login',{
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            method:'POST',
            body: JSON.stringify(loginData)
        });
        // const response = await fetch('api/users/test');
        const data = await response.json();
        console.log('response data',data);

        dispatch(uiActions.setNotification({
            message: '',
            show: false
        }));
    }
} 

export const authActions = AuthSlice.actions;

export default AuthSlice;