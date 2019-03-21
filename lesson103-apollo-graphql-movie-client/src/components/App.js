import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import client from '../graphql/apolloClient';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <>
              <Route exact={true} path={"/"} component={Home} />
              <Route exact={true} path={"/details/:movieId"} component={Detail} />
            </>
          </Router>
          <div className="App"></div>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
