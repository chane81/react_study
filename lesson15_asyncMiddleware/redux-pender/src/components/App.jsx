import React, { Component } from 'react';
// 리덕스 모듈 IMPORT
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { default as reducers } from '../modules/Post';
import { createLogger } from 'redux-logger';
import { default as Counter } from './CounterButtons';
import penderMiddleware from 'redux-pender';
import { penderReducer } from 'redux-pender';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	post: reducers,
	pender: penderReducer
});

// 로거 create
const logger = createLogger();
const pm = penderMiddleware();

const store = createStore(
	rootReducers,
	window.devToolsExtension && window.devToolsExtension(),
	applyMiddleware(logger, pm)
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Counter />
			</Provider>
		);
	}
}

export default App;
