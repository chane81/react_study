import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as TodosActions from '../../modules/lesson14/Todos';
import TodoList from '../../components/lesson10/TodoList';

/**
 * @augments {Component<{ todos:object,	TodosActions:any> }
 */
class Container extends Component {
	handleToggle = id => {
		const { TodosActions } = this.props;

		TodosActions.toggle(id);
	};

	handleRemove = id => {
		const { TodosActions } = this.props;

		TodosActions.remove(id);
	};

	render() {
		const { todos } = this.props;
		const { handleToggle, handleRemove } = this;

		return (
			<TodoList
				todos={todos}
				onToggle={handleToggle}
				onRemove={handleRemove}
			/>
		);
	}
}

Container.propTypes = {
	todos: PropTypes.object,
	TodosActions: PropTypes.any
};

export default connect(
	state => {
		console.log(state);
		return { todos: state.Lesson14Reducers.todos };
	},
	dispatch => ({
		TodosActions: bindActionCreators(TodosActions, dispatch)
	})
)(Container);
