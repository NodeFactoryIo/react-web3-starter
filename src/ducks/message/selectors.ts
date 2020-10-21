import { getEthersContract } from '../ethers/contracts/selectors';
import { RootState } from '../store';
import { Contract } from 'ethers';
import { LogMessage } from './slice';

export const getMessage = (state: RootState): string => state.message.message;

export const getMessageLog = (state: RootState): LogMessage[] => state.message.log;

export const getMessageContract = (state: RootState): Contract | undefined =>
    getEthersContract(state, { name: 'message' });
