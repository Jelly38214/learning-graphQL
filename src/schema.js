const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "NOTE: Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
    module(id: ID!): Module
  }

  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript."
    content: String
    "The module's video url, for video-based modules."
    videoUrl: String
  }
  

  type Author {
    id: ID!
    name: String!
    photo: String
  }

`;

module.exports = typeDefs
