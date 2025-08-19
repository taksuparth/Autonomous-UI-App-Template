import PageLayout from '~/components/layout/PageLayout';
import { authCheckLoader } from '~/utils/authCheckLoader';
import { Outlet } from 'react-router';

export { authCheckLoader as loader };

export default function AuthAdminLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
