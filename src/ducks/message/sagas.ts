import { all, put, call, select, takeEvery, take, fork } from 'redux-saga/effects';
import { addLogMessage, changeMessage, fetchMessage, setLogMessages, setMessage as setStoreMessage } from './actions';
import { getEthersProvider } from '../ethers/provider/selectors';
import { Contract, ContractTransaction, utils } from 'ethers';
import messageAbi from './abi';
import { storeContract } from '../ethers/contracts/actions';
import { connectProviderSuccess } from '../ethers/provider/actions';
import { getMessageContract } from './selectors';
import { eventChannel } from 'redux-saga';
import { LogMessage } from './slice';
import { Listener } from '@ethersproject/abstract-provider';

// https://goerli.etherscan.io/tx/0x09e3ded6a7448d08731c0133549270a5b8ab3a6e6bdf0b92ee04c38e57ebc7f7
const ADDRESS = '0xac6415e0423877b45e86cfee84cd379867fb3200';

export function* initContract() {
    try {
        const provider = yield select(getEthersProvider);
        const contract = new Contract(ADDRESS, messageAbi, provider.getSigner());

        yield put(storeContract('message', contract));

        yield call(getMessage);

        // Some additionally functions on contract or none

        const filter = contract.filters.Message();
        const log = yield contract.provider.getLogs({ ...filter, fromBlock: 3602282 });

        const decoder = new utils.AbiCoder();
        const mappedLogs = log.map(({ data, topics }: any) => {
            const [sender] = decoder.decode(['address'], topics[1]);
            const [setter, message] = decoder.decode(['string', 'string'], data);
            return { sender, setter, message };
        });

        yield put(setLogMessages(mappedLogs));

        yield fork(watchOnMessage, contract);
    } catch (e) {
        console.error(e);
    }
}

export function* watchOnMessage(contract: Contract) {
    const event = yield eventChannel<LogMessage>((emit) => {
        const messageEventListener: Listener = (event) => {
            if (event.event === 'Message') {
                emit({
                    sender: event.args[0],
                    setter: event.args[1] as 'admin' | 'paid' | 'free',
                    message: event.args[2],
                });
            }
        };
        contract.on('*', messageEventListener);

        return () => {
            contract.off('*', messageEventListener);
        };
    });

    while (true) {
        try {
            const payload = yield take(event);
            yield put(addLogMessage(payload));
        } catch (err) {
            console.error('contract on:', err);
        }
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
