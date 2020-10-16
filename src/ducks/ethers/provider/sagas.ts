import { all, call, put, takeEvery } from 'redux-saga/effects';
import { providers, utils } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

import { connectProvider, connectProviderFail, setProvider } from './actions';

// example for web3modal
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: '9d117da5b35f4503b142619ad690fc6a', // required
        },
    },
};

export const web3Modal = new Web3Modal({ providerOptions });

function* connect() {
    try {
        const connect = yield call(web3Modal.connect);
        const provider = new providers.Web3Provider(connect);

        const signer = provider.getSigner();
        const myAddress = yield signer.getAddress();
        const balance = yield provider.getBalance(myAddress);

        console.log(myAddress, utils.formatEther(balance));

        yield put(setProvider(provider));
    } catch (e) {
        console.error(e);
        yield put(connectProviderFail());
    }
}

function* ethersProviderSagaWatcher() {
    yield all([takeEvery(connectProvider, connect)]);
}

export default ethersProviderSagaWatcher;
