import React from "react";

import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4005/graphql",
  cache: new InMemoryCache({
    addTypename: false
  })
});

const MncApolloProvider = props => (
  <ApolloProvider client={client} {...props} />
);

export default MncApolloProvider;
