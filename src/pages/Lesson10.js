import React, { Component } from 'react';
import PageTemplate from '../components/lesson10/PageTemplate';
import TodoInput from '../components/lesson10/TodoInput';
import TodoList from '../components/lesson10/TodoList';
import { fromJS } from 'immutable';

export default class componentName extends Component {
	state = {
		input: '',
		todos: fromJS([
			{ id: 0, text: '리액트 공부하기', done: true },
			{ id: 1, text: '컴포넌트 스타일링 해보기', done: false }
		])
	};

	handleChange = e => {
		const { value } = e.target;

		this.setState({
			input: value
		});
	};

	handleInsert = e => {
		const { todos, input } = this.state;

		this.setState({
			input: '',
			todos: todos.push(
				fromJS({ id: todos.size + 1, text: input, done: false })
			)
		});
	};

	hanedleToggle = (e, id) => {
		const { todos } = this.state;

		this.setState({
			todos: todos.update(
				todos.findIndex(item => item.get('id') === id),
				item => item.set('done', !item.get('done'))
			)
		});
	};

	handleRemove = (e, id) => {
		const { todos } = this.state;

		this.setState({
			todos: todos.delete(todos.findIndex(item => item.get('id') === id))
		});
	};

	render() {
		const { input, todos } = this.state;
		const {
			handleChange,
			handleInsert,
			handleRemove,
			hanedleToggle
		} = this;

		return (
			<PageTemplate>
				<TodoInput
					onChange={handleChange}
					onInsert={handleInsert}
					value={input}
				/>
				<TodoList
					todos={todos}
					onToggle={hanedleToggle}
					onRemove={handleRemove}
				/>
			</PageTemplate>
		);
	}
}
