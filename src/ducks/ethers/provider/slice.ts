import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { providers } from 'ethers';

export type ProviderState = providers.Web3Provider | null;

const initialState: ProviderState = null as ProviderState;

const providerSlice = createSlice({
    name: '@@ethers/provider',
    initialState,
    reducers: {
        setProvider: (_, action: PayloadAction<providers.Web3Provider>): providers.Web3Provider => action.payload,
        connectProviderFail: (): null => null,
    },
});

export default providerSlice;
