const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema'); // Import the schema

const app = express();

// Set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema, // Pass the schema to the middleware
  graphiql: true  // Enable the GraphiQL tool for easy testing in the browser
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
