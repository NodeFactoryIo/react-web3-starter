import { Route, RouteProps } from 'react-router-dom';
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getAuthRoles } from '../../ducks/auth/selectors';

interface RestrictedRouteRouteProps extends RouteProps {
    roles: string[];
    blocked?: string[];
}

export const RestrictedRouteRoute: FC<RestrictedRouteRouteProps> = ({ children, roles, blocked = [], ...props }) => {
    const authRoles = useSelector(getAuthRoles);

    return useMemo(() => {
        if (
            roles.some((role) => authRoles.some((authRole) => role === authRole)) &&
            !blocked.some((role) => authRoles.some((authRole) => role === authRole))
        ) {
            return children ? <Route {...props}>{children}</Route> : <Route {...props} />;
        }

        return null;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roles, authRoles, blocked]);
};
