import React from 'react';
import App from '../shared/App';

// 리덕스 모듈 IMPORT
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// 리듀서 모듈 IMPORT
import { combineReducers } from 'redux';
import { default as Lesson13Reducers } from '../reducers/index';
import { default as ModulesReducers } from '../modules/index';

// 테스트용 사용자 커스텀 로거 미들웨어 불러오기
//import LoggerMiddleware from '../components/lesson15/LoggerMiddleware';

// 로거 모듈 IMPORT
import { createLogger } from 'redux-logger';

// 비동기 모듈 IMPORT
//import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// 리듀서들 COMBINE
const rootReducers = combineReducers({ Lesson13Reducers, ModulesReducers });

// 로거 create
const logger = createLogger();

//  promise 모듈 create
const pm = promiseMiddleware({
	promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILUER']
});

// 스토어 생성 크롬 리덕스 dev tools 를 쓰기위해 구문추가 => window.devToolsExtension &&
// window.devToolsExtension()
const store = createStore(
	rootReducers,
	window.devToolsExtension && window.devToolsExtension(),
	//applyMiddleware(logger, ReduxThunk)
	applyMiddleware(logger, pm)
);

const Root = ({ baseUrl }) => {
	return (
		<Provider store={store}>
			<App baseUrl={baseUrl} />
		</Provider>
	);
};

export default Root;
