import { all, call, CallEffect, put, PutEffect, select, SelectEffect, takeEvery } from 'redux-saga/effects';
import { BigNumber, providers, utils } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

import {
    connectProvider,
    connectProviderFail,
    connectProviderSuccess,
    getUserInfoInConsole,
    setProvider,
} from './actions';
import { getEthersProvider } from './selectors';
import { ProviderState } from './slice';
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

        yield put(setProvider(provider));

        const [myAddress, balance] = yield call(getSignerBalancer);
        console.log('getSignerBalancer from connect', myAddress, balance);

        yield put(connectProviderSuccess());
    } catch (e) {
        console.error(e);
        yield put(connectProviderFail());
    }
}

// example of provider usage
function* getSignerBalancer(): Generator<
    Promise<string> | Promise<BigNumber> | SelectEffect,
    void | [string, string],
    ProviderState & string & BigNumber
> {
    try {
        const provider: ProviderState = yield select(getEthersProvider);

        if (provider === null) {
            throw new Error('Missing provider, ensure user provider is connected before');
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
    yield all([takeEvery(connectProvider, connect), takeEvery(getUserInfoInConsole, getSignerBalancer)]);
}

export default ethersProviderSagaWatcher;
