import { RootState } from '../../store';
import { JsonRpcProviderState } from './slice';

export const getEthersJsonRpcProvider = (state: RootState): JsonRpcProviderState => state.ethers.jsonRpc;
