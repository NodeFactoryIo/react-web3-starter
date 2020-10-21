import jsonRpcSlice from './slice';
import { createAction } from '@reduxjs/toolkit';

// re-export actions from slice
export const { setJsonRpcProvider, connectJsonRpcProviderFail } = jsonRpcSlice.actions;

// custom actions for sagas
export const connectJsonRpcProvider = createAction('@@ethers/jsonRpc/connect');

export const connectJsonRpcProviderSuccess = createAction('@@ethers/jsonRpc/connect_success');
