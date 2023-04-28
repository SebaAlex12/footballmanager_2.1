import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notification: {
        title: '',
        message: '',
        status: '',
        show:false
    }
};

const UiSlice = createSlice({
    name:'ui',
    initialState,
    reducers: {
        setNotification(state,action){

            // console.log('slice state',state.notification);
            console.log('action',action);

            state.notification.title = 'dupa';

            state.notification.title = action.payload.title && action.payload.title.lenght > 0 && action.payload.title;
            state.notification.message = action.payload.message && action.payload.message.lenght > 0 && action.payload.message;
            state.notification.show = action.payload.show && action.payload.show.lenght > 0 && action.payload.show;
            state.notification.status = action.payload.status && action.payload.status.lenght > 0 && action.payload.status;
        }
    }
});

export const uiActions = UiSlice.actions;

export default UiSlice;
