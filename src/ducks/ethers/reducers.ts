import { combineReducers } from 'redux';
import contractSlice from './contracts/slice';
import providerSlice from './provider/slice';

const ethersReducers = combineReducers({
    provider: providerSlice.reducer,
    contracts: contractSlice.reducer,
});

export default ethersReducers;
