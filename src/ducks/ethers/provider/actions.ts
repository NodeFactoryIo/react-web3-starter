import providerSlice from './slice';
import { createAction } from '@reduxjs/toolkit';

// re-export actions from slice
export const { setProvider, connectProviderFail } = providerSlice.actions;

// custom actions for sagas
export const connectProvider = createAction('@@ethers/provider/connect');

export const connectProviderSuccess = createAction('@@ethers/provider/connect_success');
