import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { providers } from 'ethers';

export type JsonRpcProviderState = providers.JsonRpcProvider | null;

// change this with active instance in case of usage
const initialState: JsonRpcProviderState = null as JsonRpcProviderState;

export const jsonRpcSlice = createSlice({
  name: '@@ethers/jsonRpc',
  initialState,
  reducers: {
    setJsonRpcProvider: (_, action: PayloadAction<providers.JsonRpcProvider>): providers.JsonRpcProvider =>
      action.payload,
    connectJsonRpcProviderFail: (): null => null,
  },
});
