import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../modules/lesson15/Counter';
import * as PostActions from '../../modules/lesson15/Post';

class CounterButtons extends Component {
	render() {
		const { CounterAction, state } = this.props;

		return (
			<div>
				<div>{state}</div>
				{/* <button onClick={CounterAction.incremnetAsync}>+</button>
				<button onClick={CounterAction.decrementAsync}>-</button> */}

				<button onClick={CounterAction.incremnet}>+</button>
				<button onClick={CounterAction.decrement}>-</button>
			</div>
		);
	}
}

export default connect(
	state => ({
		state: state.ModulesReducers.counter,
		post: state.ModulesReducers.post.data,
		loading: state.ModulesReducers.pending,
		error: state.ModulesReducers.error
	}),
	dispatch => ({
		CounterAction: bindActionCreators(CounterActions, dispatch),
		PostAction: bindActionCreators(PostActions, dispatch)
	})
)(CounterButtons);
