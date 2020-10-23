import axios, { AxiosResponse } from 'axios';
import { TIMEOUT } from './index';
import { GetPrivateDataDto, PutPrivateDataDto, PutPrivateDataResponseDto } from '../types/dto/PrivateData.dto';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + 'private',
    timeout: TIMEOUT,
});

export const getPrivateData = (id: number): Promise<AxiosResponse<GetPrivateDataDto>> => instance.get(`blah/${id}`);

export const putPrivateData = (
    id: number,
    data: PutPrivateDataDto,
): Promise<AxiosResponse<PutPrivateDataResponseDto>> => instance.put(`blah/${id}`, data);
