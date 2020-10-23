import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AuthState {
    INITIALIZATION = 'initialization',
    AUTHORIZED = 'authorized',
    GUEST = 'guest',
}

interface AuthReducerState {
    state: AuthState;
}

const initialState: AuthReducerState = { state: AuthState.INITIALIZATION };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthorizeState: (state, action: PayloadAction<AuthState>): void => {
            state.state = action.payload;
        },
    },
});
