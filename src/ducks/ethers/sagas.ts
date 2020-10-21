import { all } from 'redux-saga/effects';
import ethersProviderSagaWatcher from './web3/sagas';

function* ethersSagas(): Generator {
    yield all([ethersProviderSagaWatcher()]);
}

export default ethersSagas;
