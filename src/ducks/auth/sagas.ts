import { all, takeEvery, put, PutEffect } from 'redux-saga/effects';
import { authorizeClient, requireAuthorization, revokeAuthorization, unauthorizeClient } from './actions';

function* authorize(): Generator<PutEffect, void> {
    yield put(authorizeClient());
}

function* deauthorize(): Generator<PutEffect, void> {
    yield put(unauthorizeClient());
}

export function* authSagaWatcher(): Generator {
    yield all([takeEvery(requireAuthorization, authorize), takeEvery(revokeAuthorization, deauthorize)]);
}
