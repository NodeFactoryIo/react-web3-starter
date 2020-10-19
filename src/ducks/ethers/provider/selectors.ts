import { RootState } from '../../store';

export const getEthersProvider = (state: RootState) => state.ethers.provider;
