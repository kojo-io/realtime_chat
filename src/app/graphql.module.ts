import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {WebSocketLink} from "@apollo/client/link/ws";

const uri = 'wss://possible-dragon-20.hasura.app/v1/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: new WebSocketLink({
      uri: uri,
      // uri: 'wss://hasura.io/learn/graphql',
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            'x-hasura-admin-secret': `rOZ81KOAz7tP9fLtbGE1DgnVtPhkJxKnDXdEysMp15wAKkB1xBv5dZtC0pVJSEmM`
          }
        }
      }
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
