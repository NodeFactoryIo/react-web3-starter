import React, { FC } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthState } from '../../ducks/auth/selectors';
import { AuthState } from '../../ducks/auth/slice';

export const AuthorizationRoute: FC<RouteProps> = ({ children, ...props }) => {
  const location = useLocation<{ from: string }>();
  const authState = useSelector(getAuthState);

  if (authState === AuthState.AUTHORIZED) {
    return (
      <Redirect
        to={{
          pathname: location.state?.from || '/',
        }}
      />
    );
  }

  return <Route {...props}>{children}</Route>;
};
