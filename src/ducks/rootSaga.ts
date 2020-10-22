import { all } from 'redux-saga/effects';
import ethersSagas from './ethers/sagas';
import messageProviderSagaWatcher from './message/sagas';
import authSagaWatcher from './auth/sagas';

function* rootSaga(): Generator {
    yield all([ethersSagas(), messageProviderSagaWatcher(), authSagaWatcher()]);
}

export default rootSaga;
