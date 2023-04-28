import { configureStore } from '@reduxjs/toolkit';

import AuthSlice from './auth-slice';
import UiSlice from './ui-slice';

const store = configureStore({
    reducer: { auth:AuthSlice.reducer, ui:UiSlice.reducer }
});

export default store;