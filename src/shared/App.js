import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Lesson3, Lesson4, Lesson5, Lesson6, Lesson13 } from 'pages/PageStore';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Lesson3} />
        <Route path='/lesson3' component={Lesson3} />
        <Route path='/lesson4' component={Lesson4} />
        <Route path='/lesson5' component={Lesson5} />
        <Route path='/lesson6' component={Lesson6} />
        <Route path='/lesson13' component={Lesson13} />
      </div>
    );
  }
}

export default App;
