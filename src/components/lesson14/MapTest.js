import React from 'react';
import { fromJS } from 'immutable';

const data = fromJS({
	a: 1,
	b: 2,
	c: {
		d: 3,
		e: 4,
		f: 5
	}
});

const getTest = data.get('a');
const getInTest = data.getIn(['c', 'd']);
const newDataTest = data.set('a', '2').get('a');
const setInTest = data.setIn(['c', 'd'], 23).getIn(['c', 'd']);
const mergeTest = JSON.stringify(data.merge({ a: 10, b: 75 }));
const mergeInTest = JSON.stringify(data.mergeIn(['c'], { d: 99, e: 300 }));
const convertJsObject = data.toJS().b;
const listTest = fromJS([
	{ value: 20 },
	{ value: 2 },
	{ value: 22 },
	{ value: 99 }
]);
const listGetTest = listTest.getIn([0, 'value']);
const newListSetTest = JSON.stringify(listTest.set(0, fromJS({ vale: 232 })));
const listSetInTest = JSON.stringify(
	listTest.setIn([0, 'value'], listTest.getIn([0, 'value']) * 5)
);
const listUpdateTest = JSON.stringify(
	listTest.update(0, item => item.set('value', item.get('value') * 5))
);
const listPushTest = JSON.stringify(listTest.push(fromJS({ value: 999 })));
const listUnshift = JSON.stringify(listTest.unshift(fromJS({ value: 32 })));
const listDelete = JSON.stringify(listTest.delete(1));
const listPop = JSON.stringify(listTest.pop());
const listSize = listTest.size;

export default () => {
	return (
		<div>
			<div>[Immutable.js]</div>
			<p />
			<div>map data object: {JSON.stringify(data)}</div>
			<div>get: {getTest}</div>
			<div>getIn: {getInTest}</div>
			<div>set: {newDataTest}</div>
			<div>Object Compare: {data === newDataTest ? 'true' : 'false'}</div>
			<div>setIn: {setInTest}</div>
			<div>merge: {mergeTest}</div>
			<div>mergeIn: {mergeInTest}</div>
			<div>convert json object: {convertJsObject}</div>
			<div>list getIn: {listGetTest}</div>
			<div>list set: {newListSetTest}</div>
			<div>list setIn: {listSetInTest}</div>
			<div>list update: {listUpdateTest}</div>
			<div>list push: {listPushTest}</div>
			<div>list unshift: {listUnshift}</div>
			<div>list delete: {listDelete}</div>
			<div>list pop: {listPop}</div>
			<div>list size: {listSize}</div>
			<div>{console.log(data)}</div>
		</div>
	);
};
