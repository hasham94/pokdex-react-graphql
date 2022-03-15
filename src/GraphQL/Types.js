import { GraphQLObjectType, GraphQLString } from "graphql"

export const Filter = new GraphQLObjectType({
  name: "filter",
  fields: {
    name: { type: GraphQLString },
  },
})
