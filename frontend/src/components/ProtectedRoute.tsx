import type { ComponentType } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute = ({ component }: ProtectedRouteProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Loading...</div>,
  });

  return <Component />;
};