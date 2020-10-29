import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://knowing-akita-91.hasura.app/v1/graphql'
});

export default client;
