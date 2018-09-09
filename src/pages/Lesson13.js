import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ActionTypes';
import CounterList from '../components/lesson13/CounterList';
import Buttons from '../components/lesson13/Buttons';
import getRandomColor from '../lib/getRandomColor';

/* 카운터리스트 Connect */
// state 를 컴포넌트 props 와 연결
const mapStateCounterList = state => ({
	counters: state.Lesson13Reducers.counters
});

// action dispatch 를 컴포넌트 props 와 연결
const mapDispatchCounterList = dispatch => ({
	onIncrement: index => dispatch(actions.increment(index)),
	onDecrement: index => dispatch(actions.decrement(index)),
	onSetColor: index => {
		const color = getRandomColor();
		dispatch(actions.setColor({ index, color }));
	}
});

// connect
const ConnectCounter = connect(
	mapStateCounterList,
	mapDispatchCounterList
)(CounterList);
/* 카운터리스트 Connect */

/* 버튼 Connect */
// action dispatch 를 컴포넌트 props 와 연결
const mapDispatchButtons = dispatch => ({
	onCreate: () => dispatch(actions.create(getRandomColor())),
	onRemove: () => dispatch(actions.remove())
});

// connect
const ConnectButtons = connect(
	null,
	mapDispatchButtons
)(Buttons);
/* 버튼 Connect */

export default () => {
	return (
		<div>
			<ConnectButtons />
			<ConnectCounter />
		</div>
	);
};
