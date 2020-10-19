import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contract } from 'ethers';

interface Contracts {
    [name: string]: Contract;
}

const initialState: Contracts = {};

const contractSlice = createSlice({
    name: '@@ethers/contracts',
    initialState,
    reducers: {
        storeContract: {
            reducer: (state, action: PayloadAction<Contract, string, string>) => {
                state[action.meta] = action.payload;
            },
            prepare: (name: string, contract: Contract) => ({
                payload: contract,
                meta: name,
            }),
        },
        deleteContract: (state, action: PayloadAction<string>) => {
            if (state[action.payload]) {
                delete state[action.payload];
            }
        },
    },
});

export default contractSlice;
