const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const users = [{ id: 1, username: 'Petya', age: 20 }];

const createUser = (input) => {
  const id = Date.now();
  return { id, ...input };
};

const app = express();

app.use(cors());

const root = {
  getAllUsers: () => {
    return users;
  },

  getUsers: ({ id }) => {
    return users.find((user) => user.id === id);
  },

  createUser: ({ input }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    rootValue: root,
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => console.log('started'));
