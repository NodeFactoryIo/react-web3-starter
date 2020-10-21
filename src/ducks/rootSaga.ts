import { all } from 'redux-saga/effects';
import ethersSagas from './ethers/sagas';
import messageProviderSagaWatcher from './message/sagas';

function* rootSaga(): Generator {
    yield all([ethersSagas(), messageProviderSagaWatcher()]);
}

export default rootSaga;
