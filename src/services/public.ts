import axios, { AxiosResponse } from 'axios';
import { TIMEOUT } from './index';
import { GetPublicData } from '../types/dto/PublicData.dto';

export const publicApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + 'public',
    timeout: TIMEOUT,
});

export default {
    getPublicData: (): Promise<AxiosResponse<GetPublicData>> => publicApi.get(''),
};
