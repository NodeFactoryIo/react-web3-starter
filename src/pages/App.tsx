import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Home';
import { Provider } from 'react-redux';
import store from '../ducks/store';
import Header from '../containers/Header';

const App: FC = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                    </Switch>
                </Provider>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
