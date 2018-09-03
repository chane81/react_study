import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
	state = {
		done: false
	};

	handlerToggle = e => {
		this.setState({ done: !this.state.done });
	};

	render() {
		return (
			<div>
				<TodoItem done={this.state.done} onToggle={this.handlerToggle}>
					리액트 공부하기
				</TodoItem>
				<TodoItem>컴포넌트 스타일링 해보기</TodoItem>
			</div>
		);
	}
}
