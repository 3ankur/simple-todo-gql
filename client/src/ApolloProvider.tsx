import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
  } from "@apollo/client";
  import { onError } from "@apollo/client/link/error";

import App from "./App";


const errorLink = onError(({networkError }) => {
    // if (graphqlErrors) {
    //   graphqlErrors.map(({ message , locations, path}) => {
    //     console.log(
    //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    //       )
    //   });
    // }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:5001/graphql" }),
  ]);
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

function AppApollo(){
    return(
        <ApolloProvider client={client}>
                <App/>
           
        </ApolloProvider>
    )
}
export default AppApollo;