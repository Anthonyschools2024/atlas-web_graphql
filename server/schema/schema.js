const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID // Using GraphQLID is a best practice for unique identifiers
} = require('graphql');

// Define the Task Type
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  })
});

// Define the Root Query
// A schema must have a root query, even if it's empty initially.
// This defines how users can query for data.
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // This is where you would add logic to find and return a task from the database.
        // For now, we'll return null.
        return null;
      }
    }
  }
});

// Create and export the schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
