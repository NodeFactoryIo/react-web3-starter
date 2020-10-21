import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from './rootSaga';
import ethersReducers from './ethers/reducers';
import messageSlice from './message/slice';

// state
const rootReducer = combineReducers({
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
const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'production'
        ? applyMiddleware(...middleware)
        : composeEnhancers(applyMiddleware(...middleware)),
);

export default store;

sagaMiddleware.run(rootSaga);
