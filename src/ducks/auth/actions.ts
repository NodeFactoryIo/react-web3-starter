import { createAction } from '@reduxjs/toolkit';
import { authSlice } from './slice';

export const { setAuthorizeState, storeAuthorization, removeAuthorization, addAuthorizationRole } = authSlice.actions;

type RequireAuthorization = (username: string, password: string) => { payload: { email: string; password: string } };
export const requireAuthorization = createAction<RequireAuthorization>(
    'auth/require_authorization',
    (email: string, password: string) => ({
        payload: { email, password },
    }),
);

export const revokeAuthorization = createAction('auth/revoke_authorization');
