import React, { Component } from "react";
// 리덕스 모듈 IMPORT
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { default as Reducers } from "../modules/Post";
import { createLogger } from "redux-logger";
import { default as Counter } from "./CounterButtons";
import promiseMiddleware from "redux-promise-middleware";

// promise 모듈 create
const pm = promiseMiddleware({
	promiseTypeSuffixes: ["PENDING", "SUCCESS", "FAILUER"]
});

// 로거 create
const logger = createLogger();

const store = createStore(
	Reducers,
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
