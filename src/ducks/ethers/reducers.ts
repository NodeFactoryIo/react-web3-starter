import { combineReducers } from 'redux';
import contractSlice from './contracts/slice';
import providerSlice from './web3/slice';
import jsonRpcSlice from './jsonRpc/slice';

const ethersReducers = combineReducers({
    web3: providerSlice.reducer,
    jsonRpc: jsonRpcSlice.reducer,
    contracts: contractSlice.reducer,
});

export default ethersReducers;
