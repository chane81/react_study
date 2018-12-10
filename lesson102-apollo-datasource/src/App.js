import React, { Component } from 'react';
import {default as RandomUser } from './RandomUserDatasource';

class App extends Component {
  state = {
    resultJson: ''
  }

  handleClick = async () => {
    const results = await RandomUser.getPerson();

    // console.log(results);

    // this.setState({
    //   resultJson: JSON.stringify(results)
    // }); 

    //console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>테스트</button>
        <div>{this.state.resultJson}</div>

      </div>
    );
  }
}

export default App;
