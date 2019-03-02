import React, { Component } from 'react';
import jwt from 'jsonwebtoken';

class App extends Component {
  state = {
    token: '',
    decodeData: ''
  };

  makeToken = () => {
    const token = jwt.sign({ foo: '토큰테스트' }, 'key123');

    this.setState({ token });
  };

  decodeToken = () => {
    let decodeData = jwt.verify(this.state.token, 'key123');
    decodeData = JSON.stringify(decodeData);

    this.setState({ decodeData });
  };

  render() {
    return (
      <div>
        <h1>Token: {this.state.token}</h1>
        <p />
        <h1>Decode Token: {this.state.decodeData}</h1>
        <p />
        <a href="##" onClick={this.makeToken}>토큰 만들기</a>
        <p />
        <a href="##" onClick={this.decodeToken}>토큰 해제</a>
      </div>
    );
  }
}

export default App;
