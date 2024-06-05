import { configureStore } from '@reduxjs/toolkit';

import AuthSlice from './auth/auth-slice';
import UiSlice from './ui/ui-slice';
import MatchesSlice from './matches/matches-slice';

const store = configureStore({
    reducer: { auth:AuthSlice.reducer, ui:UiSlice.reducer, matches:MatchesSlice.reducer }
});

export default store;