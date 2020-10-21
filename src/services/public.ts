import axios, { AxiosResponse } from 'axios';

export const publicApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + 'public',
});

export default {
    getPublicData: (): Promise<AxiosResponse> => publicApi.get(''),
};
