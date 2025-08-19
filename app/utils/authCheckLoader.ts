import type { LoaderFunctionArgs } from 'react-router';
import { createQueryClient } from '@/lib/query-client';
import { checkAuthentication } from './checkAuthentication';

export async function authCheckLoader({ request }: LoaderFunctionArgs) {
  const queryClient = createQueryClient();
  const { user } = await checkAuthentication({ request, queryClient });

  return { user };
}
