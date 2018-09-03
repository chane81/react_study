import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { default as MapTest } from '../components/lesson14/MapTest';
import TodoInput from '../components/lesson10/TodoInput';
import TodoList from '../components/lesson10/TodoList';
import * as InputActions from '../modules/lesson14/Input';
import * as TodosActions from '../modules/lesson14/Todos';
import { bindActionCreators } from 'redux';

/* TodoInput Connect */
class TodoInputContainer extends Component {
	id = 1;
	getId = () => {
		return ++this.id;
	};

	handleChange = e => {
		const { value } = e.target;
		const { InputActions } = this.props;
		InputActions.setInput(value);
	};

	handleInsert = () => {
		const { InputActions, TodosActions, value } = this.props;
		const todo = {
			id: this.getId(),
			text: value,
			done: false
		};

		TodosActions.insert(todo);
		InputActions.setInput('');
	};

	render() {
		const { value } = this.props;

		return (
			<TodoInput
				onChange={this.handleChange}
				onInsert={this.handleInsert}
				value={value}
			/>
		);
	}
}

TodoInputContainer.propTypes = {
	value: PropTypes.string,
	InputActions: PropTypes.func,
	TodosActions: PropTypes.func
};

export const ConnectTodoInput = connect(
	state => ({
		value: state.input.get('value')
	}),
	dispatch => ({
		InputActions: bindActionCreators(InputActions, dispatch),
		TodosActions: bindActionCreators(TodosActions, dispatch)
	})
)(TodoInputContainer);
/* TodoInput Connect */

/* TodoList Connect */
class TodoListContainer extends Component {
	handleToggle = (id) => {
		const { TodosActions } = this.props;
	}

	render() {
		return (
			<TodoList todos={} onToggle={} onRemove={}></TodoList>
		);
	}
}

TodoListContainer.propTypes = {
	todos: PropTypes.object,
	TodosActions: PropTypes.func
};

export const ConnectTodoList = connect(
	state => ({
		todos: state.todos
	}),
	dispatch => ({
		TodosActions: bindActionCreators(TodosActions, dispatch)
	})
)(TodoListContainer);
/* TodoList Connect */
