import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Home';
import { Provider } from 'react-redux';
import { store } from '../ducks/store';
import { Header } from '../containers/Header';
import { MessagePage } from './Message';
import { LoginPage } from './Login';
import { PrivateRoute } from '../containers/routes/PrivateRoute';
import { AuthorizationRoute } from '../containers/routes/AuthorizationRoute';

export const App: FC = () => {
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
                            <MessagePage />
                        </PrivateRoute>
                        <AuthorizationRoute path='/login'>
                            <LoginPage />
                        </AuthorizationRoute>
                    </Switch>
                </Provider>
            </BrowserRouter>
        </Suspense>
    );
};
