import providerSlice from './slice';
import { createAction } from '@reduxjs/toolkit';

// re-export actions from slice
export const { setWeb3Provider, connectWeb3ProviderFail } = providerSlice.actions;

// custom actions for sagas
export const connectWeb3Provider = createAction('@@ethers/web3/connect');

export const connectWeb3ProviderSuccess = createAction('@@ethers/web3/connect_success');

export const getWeb3UserInfoInConsole = createAction('@@ethers/web3/user_info_in_console');
