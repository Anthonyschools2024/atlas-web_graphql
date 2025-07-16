const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  // Enable GraphiQL for in-browser testing
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
