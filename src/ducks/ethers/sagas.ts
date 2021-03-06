import { all } from 'redux-saga/effects';
import { ethersWeb3SagaWatcher } from './web3/sagas';

export function* ethersSagas(): Generator {
  yield all([ethersWeb3SagaWatcher()]);
}
