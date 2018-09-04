import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/lesson10/TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * @augments {Component<{ done:object,	children:string,	onToggle:Function,	onRemove:Function> }
 */
class TodoItem extends Component {
	render() {
		const { done, children, onToggle, onRemove } = this.props;

		return (
			<div className={cx('todo-item')} onClick={onToggle}>
				<input
					className={cx('tick')}
					type="checkbox"
					checked={done}
					readOnly
				/>
				<div className={cx('text', { done })}>{children}</div>
				<div
					className={cx('delete')}
					onClick={e => {
						onRemove();
						e.stopPropagation();
					}}>
					[지우기]
				</div>
			</div>
		);
	}
}

TodoItem.propTypes = {
	done: PropTypes.bool,
	children: PropTypes.string,
	onToggle: PropTypes.func,
	onRemove: PropTypes.func
};

export default TodoItem;
