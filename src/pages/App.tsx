import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Home';

const App: FC = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
