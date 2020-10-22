import React, { FC } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthIsAuthorized } from '../../ducks/auth/selectors';

const AuthorizationRoute: FC<RouteProps> = ({ children, ...props }) => {
    const location = useLocation<{ from: string }>();
    const isAuthorized = useSelector(getAuthIsAuthorized);

    if (isAuthorized) {
        return (
            <Redirect
                to={{
                    pathname: location.state?.from || '/',
                }}
            />
        );
    }

    return children ? <Route {...props}>{children}</Route> : <Route {...props} />;
};

export default AuthorizationRoute;
