import axios, { AxiosResponse } from 'axios';
import { TIMEOUT } from './index';
import { GetPrivateDataDto, PutPrivateDataDto, PutPrivateDataResponseDto } from '../types/dto/PrivateData.dto';

export const privateApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + 'private',
    timeout: TIMEOUT,
});

export default {
    getPrivateData: (id: number): Promise<AxiosResponse<GetPrivateDataDto>> => privateApi.get(`blah/${id}`),

    putPrivateData: (id: number, data: PutPrivateDataDto): Promise<AxiosResponse<PutPrivateDataResponseDto>> =>
        privateApi.put(`blah/${id}`, data),
};
