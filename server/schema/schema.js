const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLFloat } = graphql;

const CryptoType = new GraphQLObjectType({
  name: "Crypto",
  fields: {
    name: {
      type: GraphQLString
    },
    value: {
      type: GraphQLFloat
    }
  }
});
