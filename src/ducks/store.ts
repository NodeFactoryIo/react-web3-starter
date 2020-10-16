import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from './rootSaga';
import ethersReducers from './ethers/reducers';

// state
const rootReducer = combineReducers({
    ethers: ethersReducers,
});
export type RootState = ReturnType<typeof rootReducer>;

// middlewares
const sagaMiddleware = reduxSaga();
const middleware = [sagaMiddleware];

// store
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'production'
        ? applyMiddleware(...middleware)
        : composeEnhancers(applyMiddleware(...middleware)),
);

export default store;

sagaMiddleware.run(rootSaga);
