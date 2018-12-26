import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';

class App extends Component {
  render() {
    return <ApolloProvider client={client}>
      <Router>
        <>
          <Route exact={true} path={"/"} component={Home} />
          <Route exact={true} path={"/details/:moveId"} component={Detail} />
        </>
      </Router>
      <div className="App"></div>
    </ApolloProvider>
  }
}

export default App;
