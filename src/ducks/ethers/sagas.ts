import { all } from 'redux-saga/effects';
import ethersProviderSagaWatcher from './provider/sagas';

function* ethersSagas() {
    yield all([ethersProviderSagaWatcher()]);
}

export default ethersSagas;
