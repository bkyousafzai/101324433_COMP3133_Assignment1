const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const PORT = process.env.PORT || 8080;
const DB_URL = "mongodb+srv://beekay:yousafzai@cluster0.hlgwu88.mongodb.net/labTest_01_chat_app?retryWrites=true&w=majority";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to the database");
        return server.listen({ port: PORT });
    })
    .then(({ url }) => {
        console.log(`Server running at ${url}`);
    })
    .catch(error => {
        console.error('Error connecting to the database or starting the server:', error);
    });
