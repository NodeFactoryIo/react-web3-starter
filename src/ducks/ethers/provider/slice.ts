import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { providers } from 'ethers';

type Provider = providers.Web3Provider | null;

const initialState: Provider = null as Provider;

const providerSlice = createSlice({
    name: '@@ethers/provider',
    initialState,
    reducers: {
        setProvider: (_, action: PayloadAction<providers.Web3Provider>) => action.payload,
        connectProviderFail: () => null,
    },
});

export default providerSlice;
