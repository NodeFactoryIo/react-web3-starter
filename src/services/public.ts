import axios, { AxiosResponse } from 'axios';
import { TIMEOUT } from './index';
import { GetPublicData } from '../types/dto/PublicData.dto';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + 'public',
    timeout: TIMEOUT,
});

export const getPublicData = (): Promise<AxiosResponse<GetPublicData>> => instance.get('');
