import { combineReducers, createStore, applyMiddleware, compose, Store } from 'redux';
import reduxSaga from 'redux-saga';
import { rootSaga } from './rootSaga';
import { ethersReducers } from './ethers/reducers';
import { messageSlice } from './message/slice';
import { authSlice } from './auth/slice';

// state
export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    ethers: ethersReducers,
    message: messageSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

// middlewares
const sagaMiddleware = reduxSaga();
const middleware = [sagaMiddleware];

// store
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const storeCreator = (initialState?: Partial<RootState>): Store<RootState> =>
    createStore(
        rootReducer,
        { ...(initialState || {}) },
        process.env.NODE_ENV === 'production'
            ? applyMiddleware(...middleware)
            : composeEnhancers(applyMiddleware(...middleware)),
    );
export const store = storeCreator();

sagaMiddleware.run(rootSaga);
