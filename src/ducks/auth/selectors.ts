import { RootState } from '../store';
import { AuthState } from './slice';

export const getAuthState = (state: RootState): AuthState => state.auth.state;
