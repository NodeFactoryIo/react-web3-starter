import { all, takeEvery } from 'redux-saga/effects';
import { changeMessage } from './actions';

function* setMessage() {
    try {
        yield console.log('some magic');
    } catch (e) {
        console.error(e);
    }
}

function* messageProviderSagaWatcher() {
    yield all([takeEvery(changeMessage, setMessage)]);
}

export default messageProviderSagaWatcher;
