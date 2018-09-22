import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from './pages/Index';
import Menu from './components/Menu';
class App extends Component {
	render() {
		return (
			<div>
				<Menu />

				{/* 라우트 설정 */}
				<Route exact path="/" component={Home} />
				<Route exact path="/about/:name?" component={About} />
			</div>
		);
	}
}

export default App;
