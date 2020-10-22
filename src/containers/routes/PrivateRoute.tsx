import React, { FC } from 'react';
import { Route, useLocation, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthIsAuthorized } from '../../ducks/auth/selectors';

interface PrivateRouteProps extends RouteProps {
    redirectTo: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, redirectTo, ...props }) => {
    const location = useLocation();
    const isAuthorized = useSelector(getAuthIsAuthorized);

    if (isAuthorized) {
        return children ? <Route {...props}>{children}</Route> : <Route {...props} />;
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

export default PrivateRoute;
