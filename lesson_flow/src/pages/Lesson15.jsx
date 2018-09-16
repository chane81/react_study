import React, { Component } from 'react';
// import { default as CounterThunk } from '../components/lesson15/reduxThunk/CounterButtons';
// import { default as CounterPromise } from '../components/lesson15/promiseMiddleware/CounterButtons';
import { default as CounterPender } from '../components/lesson15/reduxPender/CounterButtons';

class Lesson15 extends Component {
	render() {
		return (
			<div>
				{/* <div>rexux-thunk 이용</div>
				<CounterThunk />
				<hr />
				<div>redux-promise-middware 이용</div>
				<CounterPromise />
				<hr /> */}
				<div>redux-pender 이용</div>
				<CounterPender />
			</div>
		);
	}
}

export default Lesson15;
