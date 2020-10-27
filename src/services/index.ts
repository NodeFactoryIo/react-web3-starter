import { instance as privateApi } from './private';
import { AxiosInstance } from 'axios';

export const TIMEOUT = 5 * 1000;

const authorisingInstances: AxiosInstance[] = [privateApi];

export const setAuthorizationToken = (token: string): void => {
  authorisingInstances.forEach((api) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  });
};
