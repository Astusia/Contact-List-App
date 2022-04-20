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
        "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET,
      },
    };
  });

  return new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });
}

export const client = createClient();
