import React, { Component } from 'react';
// 리덕스 모듈 IMPORT
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { default as Reducers } from '../modules/post';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { default as Counter } from '../components/CounterButtons';

// 로거 create
const logger = createLogger();

const store = createStore(
	Reducers,
	window.devToolsExtension && window.devToolsExtension(),
	applyMiddleware(logger, ReduxThunk)
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
