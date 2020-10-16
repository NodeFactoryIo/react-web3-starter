import { combineReducers } from 'redux';
import providerSlice from './provider/slice';

const ethersReducers = combineReducers({
    provider: providerSlice.reducer,
});

export default ethersReducers;
