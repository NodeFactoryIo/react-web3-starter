import { all } from 'redux-saga/effects';
import ethersSagas from './ethers/sagas';

function* rootSaga() {
    yield all([ethersSagas()]);
}

export default rootSaga;
