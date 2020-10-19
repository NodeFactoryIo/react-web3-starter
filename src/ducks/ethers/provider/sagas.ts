import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { providers, utils } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

import { connectProvider, connectProviderFail, getUserInfoInConsole, setProvider } from './actions';
import { getEthersProvider } from './selectors';

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

        yield put(setProvider(provider));

        const [myAddress, balance]: [string, string] = yield call(getUserBalance);
        console.log('getUserBalance from connect', myAddress, balance);
    } catch (e) {
        console.error(e);
        yield put(connectProviderFail());
    }
}

// example of provider usage
function* getUserBalance() {
    try {
        const provider: ReturnType<typeof getEthersProvider> = yield select(getEthersProvider);

        if (provider === null) {
            throw new Error('Missing provider, ensure user provider is connected before');
        }
        const signer = provider.getSigner();
        const myAddress = yield signer.getAddress();
        const balance = utils.formatEther(yield provider.getBalance(myAddress));

        console.log('getUserBalance', myAddress, balance);

        return [myAddress, balance];
    } catch (e) {
        console.error(e);
    }
}

function* ethersProviderSagaWatcher() {
    yield all([takeEvery(connectProvider, connect), takeEvery(getUserInfoInConsole, getUserBalance)]);
}

export default ethersProviderSagaWatcher;
