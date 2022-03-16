import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

function createClient() {
  const httpLink = createHttpLink({
    uri: "https://contact-list.hasura.app/v1/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret":
          "6HIF9hYlyFFTpQPsaKsYn0oJODVj7iuI0LD90uQYslonXMCRg2lS263xJQhQgFcO",
      },
    };
  });

  return new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });
}

export const client = createClient();
