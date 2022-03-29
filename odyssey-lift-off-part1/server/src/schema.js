const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "NOTE: Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs
