import { all, takeEvery, put, PutEffect, call, CallEffect, spawn, ForkEffect, delay } from 'redux-saga/effects';
import {
    setAuthorizeState,
    requireAuthorization,
    revokeAuthorization,
    storeAuthorization,
    removeAuthorization,
} from './actions';
import { postInit } from '../store';
import { AuthState } from './slice';
import { loginUser } from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { JwtToken } from '../../types/JwtToken';
import { setAuthorizationToken } from '../../services';

const AUTH_STORAGE_KEY = 'authorization_key_v1';

function* processToken(token: string): Generator<PutEffect | CallEffect, void, void> {
    const decoded = jwtDecode<JwtToken>(token);
    const tokenTimeLeft = (decoded.exp - 10) * 1000 - Date.now();
    if (tokenTimeLeft > 0) {
        yield call(setAuthorizationToken, token);
        yield put(storeAuthorization(token, decoded.role, decoded.name, decoded.surname));
        yield delay(2 * 60 * 1000); // TODO: change this with tokenTimeLeft
        yield call(deauthorize); // you can change this with some refresh token saga
    } else {
        yield call(deauthorize);
    }
}

function* initialization(): Generator<PutEffect | ForkEffect, void, void> {
    try {
        const token = localStorage.getItem(AUTH_STORAGE_KEY);
        if (token) {
            yield spawn(processToken, token);
        } else {
            yield put(setAuthorizeState(AuthState.GUEST));
        }
    } catch (e) {
        console.error(e);
    }
}

function* authorize({
    payload: { username, password },
}: ReturnType<typeof requireAuthorization>): Generator<ForkEffect | CallEffect, void, string> {
    const token = yield call(loginUser, username, password);
    try {
        localStorage.setItem(AUTH_STORAGE_KEY, token);
    } catch {
        console.error('Unable to store token in localStorage');
    }
    yield spawn(processToken, token);
}

function* deauthorize(): Generator<PutEffect, void> {
    try {
        localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
        console.error('Unable to remove token from localStorage');
    }
    yield put(removeAuthorization());
}

export function* authSagaWatcher(): Generator {
    yield all([
        takeEvery(requireAuthorization, authorize),
        takeEvery(revokeAuthorization, deauthorize),
        takeEvery(postInit, initialization),
    ]);
}
