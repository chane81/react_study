import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../modules/lesson15/Counter';
import * as PostActions from '../../modules/lesson15/Post';
import { fromJS } from 'immutable';

class CounterButtons extends Component {
	// 컴포넌트가 처음 마운트 되었을 때
	componentDidMount() {
		console.log('componentDidMount');

		this.loadData();
	}

	// 상태값이 UPDATE 될때마다 호출됨
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');

		// 이전 number 와 현재 number 가 다르면 요청을 시작함
		if (this.props.number !== prevProps.number) {
			this.loadData();
		}
	}

	loadData = () => {
		const { postActions, number } = this.props;
		postActions
			.getPost(number)
			.then(response => {
				console.log('loadData-then');
				console.log(response);

				// -를 계속 클릭해서 number 가 0 이하가 되면 에러가 발생함
				// 강제 에러 발생시킬 때
				//throw new Error('강제에러 발생시킴!!');
			})
			.catch(error => {
				console.log('loadData-catch');
				console.log('ERROR MSG:' + error);
			});
	};

	render() {
		const { counterAction, number, post, error, loading } = this.props;

		console.log('render');

		return (
			<div>
				<h1>{number}</h1>
				{loading ? (
					<h2>로딩중...</h2>
				) : error ? (
					<h2>오류 발생!</h2>
				) : (
					<div>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
				)}

				{/* <button onClick={CounterAction.incremnetAsync}>+</button>
				<button onClick={CounterAction.decrementAsync}>-</button> */}

				<button onClick={counterAction.increment}>+</button>
				<button onClick={counterAction.decrement}>-</button>
			</div>
		);
	}
}

export default connect(
	state => ({
		number: state.ModulesReducers.counter,
		post: state.ModulesReducers.post.get('data').toJS(),
		loading: state.ModulesReducers.post.get('pending'),
		error: state.ModulesReducers.post.get('error')
	}),
	dispatch => ({
		counterAction: bindActionCreators(CounterActions, dispatch),
		postActions: bindActionCreators(PostActions, dispatch)
	})
)(CounterButtons);
