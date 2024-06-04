import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth:false,
    token: "",
};

const AuthSlice = createSlice({
    name:'authentication',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isAuth = action.payload.isAuth;
            state.token = action.payload.token
        }
    }
});

export const authActions = AuthSlice.actions;

export default AuthSlice;