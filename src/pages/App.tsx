import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Home';
import { Provider } from 'react-redux';
import store from '../ducks/store';
import Header from '../containers/Header';
import Message from './Message';
import Login from './Login';
import PrivateRoute from '../containers/routes/PrivateRoute';
import AuthorizationRoute from '../containers/routes/AuthorizationRoute';

const App: FC = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <HomePage />
                        </Route>
                        <PrivateRoute path='/message' redirectTo='/login'>
                            <Message />
                        </PrivateRoute>
                        <AuthorizationRoute path='/login'>
                            <Login />
                        </AuthorizationRoute>
                    </Switch>
                </Provider>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
