import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { providers } from 'ethers';

export type Web3ProviderState = providers.Web3Provider | null;

const initialState: Web3ProviderState = null as Web3ProviderState;

const providerSlice = createSlice({
    name: '@@ethers/web3',
    initialState,
    reducers: {
        setWeb3Provider: (_, action: PayloadAction<providers.Web3Provider>): providers.Web3Provider => action.payload,
        connectWeb3ProviderFail: (): null => null,
    },
});

export default providerSlice;
