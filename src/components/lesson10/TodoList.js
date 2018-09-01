import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
	render() {
		return (
			<div>
				<TodoItem done={true}>리액트 공부하기</TodoItem>
				<TodoItem>컴포넌트 스타일링 해보기</TodoItem>
			</div>
		);
	}
}
