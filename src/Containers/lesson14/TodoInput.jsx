import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as InputActions from '../../modules/lesson14/Input';
import * as TodosActions from '../../modules/lesson14/Todos';
import TodoInput from '../../components/lesson10/TodoInput';

/**
 * @augments {Component<{ value:string,	InputActions:any,	TodosActions:any> }
 */
class Container extends Component {
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

Container.propTypes = {
	value: PropTypes.string,
	InputActions: PropTypes.any,
	TodosActions: PropTypes.any
};

export default connect(
	state => {
		console.log(state);
		return { value: state.ModulesReducers.input.get('value') };
	},
	dispatch => ({
		InputActions: bindActionCreators(InputActions, dispatch),
		TodosActions: bindActionCreators(TodosActions, dispatch)
	})
)(Container);
