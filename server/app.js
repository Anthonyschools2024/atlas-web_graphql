const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// Require the schema we just created
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  // Pass the schema to the middleware
  schema: schema,
  // Enable GraphiQL for in-browser testing
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
