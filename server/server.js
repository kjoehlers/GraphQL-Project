const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Some fake data
const authors = [
  {
    id: '1',
    info: {
      name: 'Joe Kelly',
      age: 32,
      gender: 'M',
    },
  },
  {
    id: '1',
    info: {
      name: 'Mary Jane',
      age: 27,
      gender: 'F',
    },
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Author {
    id: ID!
    info: Person
  }
  type Person {
    name: String!
    age: Int
    gender: String
  }
  type Query {
    getAuthors: [Author]
  }
`;

// The resolvers
const resolvers = {
  Query: {
    getAuthors: () => authors,
  },
};

const PORT = 3600;

// Put together a schema
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({
  app,
  path: '/graphql',
});

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
