import React, { Component } from 'react';
import logo from './logo.svg';
import { request } from 'graphql-request';
import './App.css';

class App extends Component {
  state = {
    resultJson: ''
  }

  handleClick = async () => {

    // const query = `{
    //   allMovies
    //   {
    //     title,
    //     actors {
    //       id,
    //       name
    //     }
    //   }
    // }`;
    const query = `{
      results
      {
        gender
      }
    }`;

    let res = '';

    await request(`https://randomuser.me/api/?results=2`, query).then(data => {
      this.setState({
          resultJson: JSON.stringify(data)
      });  
    });

    return res;
  };

  handleKeyPress = e => {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};


  render() {
    return (
      <div className="App">
      <button onClick={this.handleClick}>클릭</button>
        <div>{this.state.resultJson}</div>
      </div>
    );
  }
}

export default App;
