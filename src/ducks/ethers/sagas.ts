import { all } from 'redux-saga/effects';
import ethersProviderSagaWatcher from './provider/sagas';

function* ethersSagas(): Generator {
    yield all([ethersProviderSagaWatcher()]);
}

export default ethersSagas;
