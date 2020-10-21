import { RootState } from '../../store';
import { ProviderState } from './slice';

export const getEthersProvider = (state: RootState): ProviderState => state.ethers.provider;
