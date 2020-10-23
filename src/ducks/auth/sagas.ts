import { all, takeEvery, put, PutEffect } from 'redux-saga/effects';
import { setAuthorizeState, requireAuthorization, revokeAuthorization } from './actions';
import { postInit } from '../store';
import { AuthState } from './slice';

const AUTH_STORAGE_KEY = 'authorization_key_v1';

function* initialization(): Generator<PutEffect, void, void> {
    try {
        // check if there is a stored token
        const token = localStorage.getItem(AUTH_STORAGE_KEY);
        if (token) {
            console.log('token', token);
            yield put(setAuthorizeState(AuthState.AUTHORIZED));
        } else {
            yield put(setAuthorizeState(AuthState.GUEST));
        }
    } catch (e) {
        console.error(e);
    }
}

function* authorize(): Generator<PutEffect, void> {
    yield put(setAuthorizeState(AuthState.AUTHORIZED));
}

function* deauthorize(): Generator<PutEffect, void> {
    yield put(setAuthorizeState(AuthState.GUEST));
}

export function* authSagaWatcher(): Generator {
    yield all([
        takeEvery(requireAuthorization, authorize),
        takeEvery(revokeAuthorization, deauthorize),
        takeEvery(postInit, initialization),
    ]);
}
