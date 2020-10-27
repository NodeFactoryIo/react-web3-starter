import { combineReducers } from 'redux';
import { contractSlice } from './contracts/slice';
import { web3Slice } from './web3/slice';
import { jsonRpcSlice } from './jsonRpc/slice';

export const ethersReducers = combineReducers({
  web3: web3Slice.reducer,
  jsonRpc: jsonRpcSlice.reducer,
  contracts: contractSlice.reducer,
});
