import { Permission } from '~/gql/graphql';
import { requirePermissions } from '~/utils/requirePermissions';
import { Outlet, type LoaderFunctionArgs } from 'react-router';

export async function loader({ request, params }: LoaderFunctionArgs) {
  return await requirePermissions({
    request,
    params,
    required: [Permission.ViewEvent],
  });
}

export default function AuthAdminLayout() {
  return <Outlet />;
}
