import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth:false
};

export const authSlice = createSlice({
    name:'authentication',
    initialState,
    reducers: {
        login(state){
            console.log('login reducer');
            return state
        }
    }
});

const store = configureStore({
    reducer: authSlice.reducer
});

export default store;