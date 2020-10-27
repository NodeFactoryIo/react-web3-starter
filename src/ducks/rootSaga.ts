import { all } from 'redux-saga/effects';
import { ethersSagas } from './ethers/sagas';
import { messageSagaWatcher } from './message/sagas';
import { authSagaWatcher } from './auth/sagas';

export function* rootSaga(): Generator {
  yield all([ethersSagas(), messageSagaWatcher(), authSagaWatcher()]);
}
