import React from 'react';
import App from '../shared/App';

// 리덕스 관련 불러오기
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// 리듀서 가져오기
import { combineReducers } from 'redux';
import { default as Lesson13Reducers } from '../reducers/index';
import { default as ModulesReducers } from '../modules/index';

// 테스트용 사용자 커스텀 로거 미들웨어 불러오기
import LoggerMiddleware from '../components/lesson15/LoggerMiddleware';

// 루트 리듀서들
const rootReducers = combineReducers({ Lesson13Reducers, ModulesReducers });

// 로거
const logger = createLogger();

// 스토어 생성 크롬 리덕스 dev tools 를 쓰기위해 구문추가 => window.devToolsExtension &&
// window.devToolsExtension()
const store = createStore(
	rootReducers,
	window.devToolsExtension && window.devToolsExtension(),
	applyMiddleware(logger, ReduxThunk)
);

const Root = ({ baseUrl }) => {
	return (
		<Provider store={store}>
			<App baseUrl={baseUrl} />
		</Provider>
	);
};

export default Root;
