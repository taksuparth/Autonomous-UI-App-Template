import { startTransition, StrictMode } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { parseCookies } from './utils/parseCookies';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/api/graphql',
  credentials: 'include', // This is important for sending cookies
});

// 2. Create the middleware link that will add your custom headers.
const authLink = setContext((_, { headers }) => {
  // This function runs for every single GraphQL request
  const cookies = parseCookies(document.cookie);
  const csrfToken = cookies['csrf_token'];

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers, // Preserve existing headers
      'X-CSRF-Token': csrfToken || '',
    },
  };
});

function App() {
  // Initialize the client, rehydrating the cache with the state from the server
  const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  });

  return (
    <ApolloProvider client={client}>
      <HydratedRouter />
    </ApolloProvider>
  );
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
