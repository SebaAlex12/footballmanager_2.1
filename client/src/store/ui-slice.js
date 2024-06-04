import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    notification: {
        messages: {},
        status: ''
    }
};

const UiSlice = createSlice({
    name:'ui',
    initialState,
    reducers: {
        setNotification: (state,action) => {
            console.log('notification state',current(state));
            state.notification.messages = action.payload.messages;
            state.notification.status = action.payload.status;
        }
    }
});

export const uiActions = UiSlice.actions;

export default UiSlice;
