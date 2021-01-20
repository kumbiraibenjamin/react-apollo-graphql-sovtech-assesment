
const { gql } = require("apollo-server");

const typeDefs = gql`
    type Joke {
        icon_url: String
        id: String
        url: String
        value: String
    }

    type Query {
        getJoke(category: String): Joke
        categories: [String]
    }
`;

module.exports = typeDefs;