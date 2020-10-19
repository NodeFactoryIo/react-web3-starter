import { all } from 'redux-saga/effects';
import ethersSagas from './ethers/sagas';
import messageProviderSagaWatcher from './message/sagas';

function* rootSaga() {
    yield all([ethersSagas(), messageProviderSagaWatcher()]);
}

export default rootSaga;
