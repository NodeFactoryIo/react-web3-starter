import { FC, isValidElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getAuthRoles } from '../../ducks/auth/selectors';

interface RestrictedViewProps {
  roles: string[];
  blockedRoles?: string[];
}

export const RestrictedView: FC<RestrictedViewProps> = ({ children, roles, blockedRoles = [] }) => {
  const authRoles = useSelector(getAuthRoles);

  const canDisplay = useMemo(
    () =>
      roles.some((role) => authRoles.some((authRole) => role === authRole)) &&
      !blockedRoles.some((role) => authRoles.some((authRole) => role === authRole)),
    [roles, authRoles, blockedRoles],
  );

  return canDisplay && isValidElement(children) ? children : null;
};
