import { RootState } from '../../store';
import { Web3ProviderState } from './slice';

export const getEthersWeb3Provider = (state: RootState): Web3ProviderState => state.ethers.web3;
