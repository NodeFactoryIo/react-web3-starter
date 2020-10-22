import privateApi, { privateApi as privateApiInstance } from './private';
import publicApi from './public';
import { AxiosInstance } from 'axios';

export const TIMEOUT = 5 * 1000;

const authorisingInstances: AxiosInstance[] = [privateApiInstance];

export const setAuthorizationToken = (token: string): void => {
    authorisingInstances.forEach((api) => {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    });
};

export default {
    privateApi,
    publicApi,
};
