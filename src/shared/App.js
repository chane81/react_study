import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
	Lesson3,
	Lesson4,
	Lesson5,
	Lesson6,
	Lesson10,
	Lesson13,
	Lesson14
} from '../pages/PageStore';

class App extends Component {
	render() {
		const { baseUrl } = this.props;

		return (
			<Router basename={baseUrl}>
				<React.Fragment>
					<ul>
						<li>
							<Link to="/lesson3">Lesson3</Link>
						</li>
						<li>
							<Link to="/lesson4">Lesson4</Link>
						</li>
						<li>
							<Link to="/lesson5">Lesson5</Link>
						</li>
						<li>
							<Link to="/lesson6">Lesson6</Link>
						</li>
						<li>
							<Link to="/lesson10">Lesson10</Link>
						</li>
						<li>
							<Link to="/lesson13">Lesson13</Link>
						</li>
						<li>
							<Link to="/lesson14">Lesson14</Link>
						</li>
					</ul>

					<hr />

					<Route exact path="/" component={Lesson3} />
					<Route path="/lesson3" component={Lesson3} />
					<Route path="/lesson4" component={Lesson4} />
					<Route path="/lesson5" component={Lesson5} />
					<Route path="/lesson6" component={Lesson6} />
					<Route path="/lesson13" component={Lesson13} />
					<Route path="/lesson14" component={Lesson14} />
					<Route path="/lesson10" component={Lesson10} />
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
