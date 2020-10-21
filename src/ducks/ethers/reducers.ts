import { combineReducers } from 'redux';
import contractSlice from './contracts/slice';
import providerSlice from './web3/slice';

const ethersReducers = combineReducers({
    web3: providerSlice.reducer,
    contracts: contractSlice.reducer,
});

export default ethersReducers;
