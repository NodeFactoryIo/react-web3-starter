import { RootState } from '../../store';
import { Contract } from 'ethers';

export const getEthersContract = (state: RootState, props: { name: string }): Contract | undefined =>
    state.ethers.contracts[props.name];
