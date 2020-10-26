import { createAction } from '@reduxjs/toolkit';
import { authSlice } from './slice';

export const { setAuthorizeState, storeAuthorization, removeAuthorization, addAuthorizationRole } = authSlice.actions;

type RequireAuthorization = (username: string, password: string) => { payload: { username: string; password: string } };
export const requireAuthorization = createAction<RequireAuthorization>(
    'auth/require_authorization',
    (username: string, password: string) => ({
        payload: { username, password },
    }),
);

export const revokeAuthorization = createAction('auth/revoke_authorization');
