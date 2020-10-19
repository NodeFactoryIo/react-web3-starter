import { all, put, call, select, takeEvery } from 'redux-saga/effects';
import { changeMessage, fetchMessage, setMessage as setStoreMessage } from './actions';
import { getEthersProvider } from '../ethers/provider/selectors';
import { Contract, ContractTransaction } from 'ethers';
import messageAbi from './abi';
import { storeContract } from '../ethers/contracts/actions';
import { connectProviderSuccess } from '../ethers/provider/actions';
import { getMessageContract } from './selectors';

// https://goerli.etherscan.io/tx/0x89644c8d0ac220291810b7c1b85b70675f2f3cd3c0dc07a00c2aaeaf00131eaf
const ADDRESS = '0x2287f81d808dd765a355cfcaf32f35683d4e7365';

export function* initContract() {
    try {
        const provider = yield select(getEthersProvider);
        const contract = new Contract(ADDRESS, messageAbi, provider.getSigner());

        // Some additionally functions on contract or none

        yield put(storeContract('message', contract));

        yield call(getMessage);
    } catch (e) {
        console.error(e);
    }
}

function* setMessage(action: ReturnType<typeof changeMessage>) {
    try {
        const contract = yield select(getMessageContract);
        const result: ContractTransaction = yield contract.setFreedMessage(action.payload);

        const { status } = yield result.wait();
        if (status === 1) {
            yield put(setStoreMessage(action.payload));
        }
    } catch (e) {
        console.error(e);
    }
}

function* getMessage() {
    try {
        const contract = yield select(getMessageContract);

        const message = yield contract.message();
        yield put(setStoreMessage(message));
    } catch (e) {
        console.log(e);
    }
}

function* messageProviderSagaWatcher() {
    yield all([
        takeEvery(changeMessage, setMessage),
        takeEvery(connectProviderSuccess, initContract),
        takeEvery(fetchMessage, getMessage),
    ]);
}

export default messageProviderSagaWatcher;
