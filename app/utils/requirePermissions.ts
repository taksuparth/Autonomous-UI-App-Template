import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { Permission } from '~/gql/graphql';
import { data, redirect } from 'react-router';
import { checkAuthentication } from './checkAuthentication';

// Define the GraphQL query to match the backend
const GET_EVENT_PERMISSIONS_QUERY = gql(`
  #graphql
  query GetEventPermissions($eventId: String!) {
    getUserEventPermission(eventId: $eventId)
  }
`);

interface RequirePermissionsParams {
  request: Request;
  params: { eventId?: string };
  required: Permission[];
}

/**
 * A utility to be used in loaders to protect routes.
 * It checks for authentication and specific user permissions for an event.
 *
 * @returns The user and their permissions for the event.
 * @throws {Response} A redirect response if auth or permissions fail.
 */
export async function requirePermissions({
  request,
  params,
  required,
}: RequirePermissionsParams) {
  // 1. First, ensure the user is authenticated at all.
  const { user } = await checkAuthentication({ request });
  const { eventId } = params;

  if (!eventId) {
    // This should not happen if used on a route with an $eventId param, but it's a good safeguard.
    throw redirect('/unauthorized');
  }

  // 2. Create a temporary, server-side Apollo Client to fetch permissions.
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql', // Your backend URL
    cache: new InMemoryCache(),
    ssrMode: true,
    // Pass the cookie header from the original request for authentication
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  });

  const { data: eventPermissionData } = await client.query({
    query: GET_EVENT_PERMISSIONS_QUERY,
    variables: { eventId },
  });

  const userPermissions =
    eventPermissionData.getUserEventPermission as Permission[];

  // 3. Check for event-level access first.
  const canViewEvent = userPermissions.includes(Permission.ViewEvent);
  if (!canViewEvent) {
    // If the user can't even view the event, send them to a generic unauthorized page.
    throw redirect('/unauthorized');
  }

  // 4. Check if the user has ALL of the required permissions for this specific page.
  const hasAllRequiredPermissions = required.every((p) =>
    userPermissions.includes(p),
  );

  if (!hasAllRequiredPermissions) {
    // If they can view the event but are missing permissions for this specific page (e.g., guests),
    // send them back to the event's home page as a safe fallback.
    throw redirect(`/dashboard/${eventId}/home`);
  }

  // 5. If all checks pass, return the user and their permissions.
  return data({ user, permissions: userPermissions });
}
