import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';

type Props = {
  name: String,
  age: Number,
  address: String
}

class App extends Component<Props> {
  render() {
    const { name, age, address } = this.props;

    return (
      <div className="App">
       <div>{ name }</div>
       <div>{ age }</div>
       <div>{ address }</div>
      </div>
    );
  }
}

export default App;
