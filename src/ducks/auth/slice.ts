import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isAuthorized: boolean;
}

const initialState: AuthState = { isAuthorized: false };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorizeClient: (state): void => {
            state.isAuthorized = true;
        },
        unauthorizeClient: (state): void => {
            state.isAuthorized = false;
        },
    },
});