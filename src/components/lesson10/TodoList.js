import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

/**
 * @augments {Component<{ todos:object,	onToggle:Function,	onRemove:Function> }
 */
class TodoList extends Component {
	render() {
		const { todos, onToggle, onRemove } = this.props;

		const todoList = todos.map(todo => (
			<TodoItem
				key={todo.get('id')}
				done={todo.get('done')}
				onToggle={() => onToggle(todo.get('id'))}
				onRemove={() => onRemove(todo.get('id'))}>
				{todo.get('text')}
			</TodoItem>
		));

		return <div>{todoList}</div>;
	}
}

TodoList.propTypes = {
	todos: PropTypes.object,
	onToggle: PropTypes.func,
	onRemove: PropTypes.func
};

export default TodoList;
