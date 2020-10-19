import { RootState } from '../../store';

export const getEthersContract = (state: RootState, props: { name: string }) => state.ethers.contracts[props.name];
