import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contract } from 'ethers';

interface ContractsState {
    [name: string]: Contract;
}

const initialState: ContractsState = {};

export const contractSlice = createSlice({
    name: '@@ethers/contracts',
    initialState,
    reducers: {
        storeContract: {
            reducer: (state, action: PayloadAction<Contract, string, string>): void => {
                state[action.meta] = action.payload;
            },
            prepare: (name: string, contract: Contract): { payload: Contract; meta: string } => ({
                payload: contract,
                meta: name,
            }),
        },
        deleteContract: (state, action: PayloadAction<string>): void => {
            if (state[action.payload]) {
                delete state[action.payload];
            }
        },
    },
});
