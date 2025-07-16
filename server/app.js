const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose'); // Require Mongoose

const app = express();

// --- IMPORTANT ---
// Replace the string below with your actual connection string from MongoDB Atlas
const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connect to MongoDB Atlas database
mongoose.connect(MONGO_URI);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
