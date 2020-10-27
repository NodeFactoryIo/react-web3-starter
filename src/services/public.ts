import axios, { AxiosResponse } from 'axios';
import { GetPublicData } from '../types/dto/PublicData.dto';

export const TIMEOUT = 5 * 1000;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + 'public',
  timeout: TIMEOUT,
});

export const getPublicData = (): Promise<AxiosResponse<GetPublicData>> => instance.get('');
