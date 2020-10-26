import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AuthState {
    INITIALIZATION = 'initialization',
    AUTHORIZED = 'authorized',
    GUEST = 'guest',
}

interface AuthReducerState {
    state: AuthState;
    token: null | string;
    roles: string[];
    name: string;
    surname: string;
}

const initialState: AuthReducerState = {
    state: AuthState.INITIALIZATION,
    token: null,
    roles: [],
    name: '',
    surname: '',
};

interface StoreAuthorizationPayload {
    token: string;
    roles: string[];
    name: string;
    surname: string;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthorizeState: (state, action: PayloadAction<AuthState>): void => {
            state.state = action.payload;
        },
        storeAuthorization: {
            reducer: (state, action: PayloadAction<StoreAuthorizationPayload>): void => {
                state.state = AuthState.AUTHORIZED;
                state.roles = action.payload.roles;
                state.token = action.payload.token;
                state.name = action.payload.name;
                state.surname = action.payload.surname;
            },
            prepare: (
                token: string,
                roles: string[],
                name: string,
                surname: string,
            ): { payload: StoreAuthorizationPayload } => ({
                payload: { token, roles, name, surname },
            }),
        },
        removeAuthorization: (state): void => {
            state.state = AuthState.GUEST;
            state.roles = [];
            state.token = null;
            state.name = '';
            state.surname = '';
        },
    },
});
