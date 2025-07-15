const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema // GraphQLSchema is needed to create the schema
} = require('graphql');

// 1. Define the Task Type
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  })
});

// 2. Create the Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      // Arguments required to query for a specific task
      args: { id: { type: GraphQLString } },
      // The function that retrieves the data
      resolve(parent, args) {
        // Code to get data from db / other source will go here.
        // args.id will contain the ID passed by the client.
      }
    }
  }
});

// 3. Export the schema with the RootQuery
module.exports = new GraphQLSchema({
  query: RootQuery
});
