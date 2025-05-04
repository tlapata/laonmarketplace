import { configGraphQL as config } from "config/constants/config";
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  split,
  DefaultOptions,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { onError } from "@apollo/client/link/error";
import { SubscriptionClient } from "subscriptions-transport-ws";

const subClient = new SubscriptionClient(config.proxyWSGraphQLUrl, {
  reconnect: true,
});

const wsLink = new WebSocketLink(subClient);
const httpLink = new HttpLink({ uri: config.proxyGraphQLUrl });

const authLink = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      callSecret: localStorage.getItem("callSecret") || null,
    },
  });

  return forward(operation);
});
const middlewareLink = authLink.concat(httpLink);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  middlewareLink
);

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const GraphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(
          ({ extensions, message, locations, path }, index) => {
            if (extensions) {
              console.log(`[Graphql error]: ${message}`, "error");
            }
          }
        );
      } else if (networkError) {
        console.log(`[Network error]: ${networkError}`, "error");
      }
    }),
    splitLink,
  ]),
  defaultOptions: defaultOptions,
});

export default GraphqlClient;
