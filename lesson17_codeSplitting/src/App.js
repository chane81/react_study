import React, { Component } from 'react';
import AsyncSplitMe from './components/AsyncSplitMe';

class App extends Component {
	render() {
		console.log('랜더링');
		return (
			<div className="App">
				<AsyncSplitMe />
			</div>
		);
	}
}

export default App;
