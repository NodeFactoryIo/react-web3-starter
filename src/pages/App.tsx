import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Home';
import { Provider } from 'react-redux';
import store from '../ducks/store';
import Header from '../containers/Header';
import Message from './Message';
import Login from './Login';

const App: FC = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/message' component={Message} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </Provider>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
