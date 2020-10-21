import { all, call, CallEffect, put, PutEffect, select, SelectEffect, takeEvery } from 'redux-saga/effects';
import { BigNumber, providers, utils } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

import {
    connectWeb3Provider,
    connectWeb3ProviderFail,
    connectWeb3ProviderSuccess,
    getWeb3UserInfoInConsole,
    setWeb3Provider,
} from './actions';
import { getEthersWeb3Provider } from './selectors';
import { Web3ProviderState } from './slice';
import { ExternalProvider } from '@ethersproject/providers/lib/web3-provider';

// example for web3modal
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.REACT_APP_INFURA, // required
        },
    },
};

export const web3Modal = new Web3Modal({ providerOptions });

function* connect(): Generator<CallEffect | PutEffect, void, ExternalProvider & [string, string]> {
    try {
        const connect = yield call(web3Modal.connect);
        const provider = new providers.Web3Provider(connect);

        yield put(setWeb3Provider(provider));

        const [myAddress, balance] = yield call(getSignerBalancer);
        console.log('getSignerBalancer from connect', myAddress, balance);

        yield put(connectWeb3ProviderSuccess());
    } catch (e) {
        console.error(e);
        yield put(connectWeb3ProviderFail());
    }
}

// example of web3 usage
function* getSignerBalancer(): Generator<
    Promise<string> | Promise<BigNumber> | SelectEffect,
    void | [string, string],
    Web3ProviderState & string & BigNumber
> {
    try {
        const provider: Web3ProviderState = yield select(getEthersWeb3Provider);

        if (provider === null) {
            throw new Error('Missing web3, ensure user web3 is connected before');
        }
        const signer = provider.getSigner();
        const myAddress: string = yield signer.getAddress();
        const balance = utils.formatEther(yield provider.getBalance(myAddress));

        console.log('getSignerBalancer', myAddress, balance);

        return [myAddress, balance];
    } catch (e) {
        console.error(e);
    }
}

function* ethersProviderSagaWatcher(): Generator {
    yield all([takeEvery(connectWeb3Provider, connect), takeEvery(getWeb3UserInfoInConsole, getSignerBalancer)]);
}

export default ethersProviderSagaWatcher;
