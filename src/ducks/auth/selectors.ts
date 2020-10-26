import { RootState } from '../store';
import { AuthState } from './slice';

export const getAuthState = (state: RootState): AuthState => state.auth.state;

export const getAuthRoles = (state: RootState): string[] => state.auth.roles;
