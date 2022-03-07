import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useStyles } from '../styled/graphqlStyles';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: InMemoryCache,
});

const Graphql = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentGraphql}>
      <ApolloProvider client={client}>
        <form>
          <div className={classes.wrapperInput}>
            <input placeholder="username" className={classes.input} />
            <input placeholder="age" className={classes.input} />
          </div>
          <div className={classes.wrapperButton}>
            <button className={classes.btn} type="button">
              Sent
            </button>
            <button className={classes.btn} type="button">
              Get
            </button>
          </div>
        </form>
      </ApolloProvider>
    </div>
  );
};

export default Graphql;
