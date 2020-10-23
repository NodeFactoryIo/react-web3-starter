import React, { FC } from 'react';
import { Route, useLocation, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthState } from '../../ducks/auth/selectors';
import { AuthState } from '../../ducks/auth/slice';

interface PrivateRouteProps extends RouteProps {
    redirectTo: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children, redirectTo, ...props }) => {
    const location = useLocation();
    const authState = useSelector(getAuthState);

    if (authState === AuthState.AUTHORIZED) {
        return children ? <Route {...props}>{children}</Route> : <Route {...props} />;
    }

    if (authState === AuthState.INITIALIZATION) {
        return null;
    }

    return (
        <Redirect
            to={{
                pathname: redirectTo,
                state: {
                    from: location.pathname,
                },
            }}
        />
    );
};
