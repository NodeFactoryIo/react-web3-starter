import axios, { AxiosResponse } from 'axios';

export const privateApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + 'private',
});

export default {
    getPrivateData: (id: number): Promise<AxiosResponse> => privateApi.get(`blah/${id}`),

    putPrivateData: (id: number, data: { name: string; id: number }): Promise<AxiosResponse> =>
        privateApi.put(`blah/${id}`, data),
};
