import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SuperMarket from './components/SuperMarket';
import DevTools from 'mobx-react-devtools';
import PostMobXpromise from './components/Post.jsx';
import PostMobXpromiseV2 from './components/PostV2';
import PostMobXpromiseV3 from './components/PostV3';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<ul>
						<li>
							<Link to="/">장바구니</Link>
						</li>
						<li>
							<Link to="/post-mobx-promise">MobX Promise</Link>
						</li>
						<li>
							<Link to="/post-mobx-promise-v2">
								MobX Promise V2
							</Link>
						</li>
						<li>
							<Link to="/post-mobx-promise-v3">
								MobX State tree - Promise V3
							</Link>
						</li>
					</ul>

					<Route exact path="/" component={SuperMarket} />
					<Route
						path="/post-mobx-promise/"
						component={PostMobXpromise}
					/>
					<Route
						path="/post-mobx-promise-v2/"
						component={PostMobXpromiseV2}
					/>
					<Route
						path="/post-mobx-promise-v3/"
						component={PostMobXpromiseV3}
					/>

					{process.env.NODE_ENV === 'development' && <DevTools />}
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
