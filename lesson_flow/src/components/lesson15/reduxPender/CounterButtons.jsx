import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as CounterActions from '../../../modules/lesson15/Counter.jsx';
import * as PostActions from '../../../modules/lesson15/reduxPender/Post.jsx';

class CounterButtons extends Component {
	cancelRequest = null;

	handleCancel = () => {
		if (this.cancelRequest) {
			this.cancelRequest();
			this.cancelRequest = null;
		}
	};

	// 컴포넌트가 처음 마운트 되었을 때
	componentDidMount() {
		console.log('componentDidMount');

		this.loadData();

		window.addEventListener('keyup', e => {
			if (e.key === 'Escape') {
				this.handleCancel();
			}
		});
	}

	// 상태값이 UPDATE 될때마다 호출됨
	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('componentDidUpdate');

	// 	// 이전 number 와 현재 number 가 다르면 요청을 시작함
	// 	if (this.props.number !== prevProps.number) {
	// 		this.loadData();
	// 	}
	// 	return false;
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('componentDidUpdate');

		// 이전 number 와 현재 number 가 다르면 요청을 시작함
		if (this.props.number > nextProps.number) {
			this.loadData();

			return true;
		} else {
			return false;
		}
	}

	loadData = async () => {
		const { postActions, number } = this.props;

		try {
			const res = postActions.getPost(number);
			this.cancelRequest = res.cancel;

			// this.cancelRequest 에 res.cancel 객체를 넣고 그 다음에 await 를 해야한다.
			// 이유 : 비동기 작업중에 esc 키를 누른것이기 때문에

			await res;

			console.log(this.cancelRequest);
			console.log('요청 완료 된 다음에 실행됨');
		} catch (e) {
			console.log(e);
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

				{/* <button onClick={CounterAction.incremnetAsync}>+</button>
				<button onClick={CounterAction.decrementAsync}>-</button> */}
			</div>
		);
	}
}

export default connect(
	state => {
		return {
			number: state.ModulesReducers.postPender.get('num'),
			post: state.ModulesReducers.postPender.get('data').toJS(),
			loading: state.ModulesReducers.pender.pending[PostActions.GET_POST],
			error: state.ModulesReducers.pender.failure[PostActions.GET_POST]
		};
	},
	dispatch => {
		return { postActions: bindActionCreators(PostActions, dispatch) };
	}
)(CounterButtons);
