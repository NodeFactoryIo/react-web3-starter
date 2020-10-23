import { RootState } from '../store';

export const getAuthIsAuthorized = (state: RootState): boolean => state.auth.isAuthorized;
