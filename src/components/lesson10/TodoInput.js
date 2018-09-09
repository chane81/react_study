import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/lesson10/TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoInput extends Component {
	handleKeyPress = e => {
		const { onInsert } = this.props;

		if (e.key === 'Enter') {
			onInsert();
		}
	};

	render() {
		const { value, onChange, onInsert } = this.props;

		return (
			<div className={cx('todo-input')}>
				<input
					onChange={onChange}
					value={value}
					onKeyPress={this.handleKeyPress}
				/>
				<div className={cx('add-button')} onClick={onInsert}>
					추가
				</div>
			</div>
		);
	}
}

/**
 * @augments {Component<{	value:string,	onChange:Function,	onInsert:Function>}
 */
// const TodoInput = ({ value, onChange, onInsert }) => {
// 	const handleKeyPress = e => {
// 		if (e.key === 'Enter') {
// 			onInsert();
// 		}
// 	};

// 	return (
// 		<div className={cx('todo-input')}>
// 			<input
// 				onChange={onChange}
// 				value={value}
// 				onKeyPress={handleKeyPress}
// 			/>
// 			<div className={cx('add-button')} onClick={onInsert}>
// 				추가
// 			</div>
// 		</div>
// 	);
// };

TodoInput.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	onInsert: PropTypes.func
};

export default TodoInput;
