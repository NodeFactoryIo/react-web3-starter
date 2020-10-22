import { createAction } from '@reduxjs/toolkit';
import authSlice from './slice';

export const { authorizeClient, unauthorizeClient } = authSlice.actions;

export const requireAuthorization = createAction('auth/require_authorization');

export const revokeAuthorization = createAction('auth/revoke_authorization');
