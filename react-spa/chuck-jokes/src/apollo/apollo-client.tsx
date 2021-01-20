import ApolloClient from "apollo-boost";

const client: any = new ApolloClient({
  uri: "http://localhost:4000/"
});

export { client };