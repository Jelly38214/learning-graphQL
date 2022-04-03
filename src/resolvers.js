const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our website
    tracksForHome: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getTracksForHome();
    },
    // get a single track by id, for the Track page.
    track: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getTrack(args.id);
    },
    // get a single module by ID, for the module detail page.
    module(parent, args, context, info) {
      return context.dataSources.trackAPI.getModule(args.id);
    }
  },
  Track: {
    author: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getAuthor(parent.authorId);
    },
    modules: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getTrackModules(parent.id);
    },
  },
};

module.exports = resolvers;
