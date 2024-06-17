import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth:false,
    token:"",
    userId: null,
    userName: ""
};

const AuthSlice = createSlice({
    name:'authentication',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            // console.log('payload',action.payload);
            state.isAuth = action.payload.isAuth;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            // state.token = action.payload.token;
        }
    }
});

export const authActions = AuthSlice.actions;

export default AuthSlice;