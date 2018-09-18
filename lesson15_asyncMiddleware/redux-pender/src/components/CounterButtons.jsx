import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostActions from '../modules/Post';

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
		return false;
	}

	loadData = async () => {
		const { postActions, number } = this.props;

		try {
			await postActions.getPost(number);
			console.log('요청 완료 된 다음에 실행됨');
		} catch (e) {
			console.log('에러발생!');
		}
	};

	render() {
		const { postActions, number, post, error, loading } = this.props;

		console.log('promise render');

		return (
			<div>
				<h1>{number}</h1>
				<button onClick={postActions.increment}>+</button>
				<button onClick={postActions.decrement}>-</button>
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
			</div>
		);
	}
}

export default connect(
	state => {
		console.log(state.pending);

		return {
			number: state.post.get('num'),
			post: state.post.get('data').toJS(),
			loading: state.pender.pending[PostActions.GET_POST],
			error: state.pender.failure[PostActions.GET_POST]
		};
	},
	dispatch => {
		return { postActions: bindActionCreators(PostActions, dispatch) };
	}
)(CounterButtons);
