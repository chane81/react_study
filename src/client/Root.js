import React from 'react';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';

// 리덕스 관련 불러오기
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 리듀서 가져오기
import { combineReducers } from 'redux';
import { default as Lesson13Reducers } from '../reducers/index';
import { default as Lesson14Reducers } from '../modules/index';

// 루트 리듀서들
const rootReducers = combineReducers({ Lesson13Reducers, Lesson14Reducers });

// 스토어 생성
// 크롬 리덕스 dev tools 를 쓰기위해 구문추가 => window.devToolsExtension && window.devToolsExtension()
const store = createStore(
	rootReducers,
	window.devToolsExtension && window.devToolsExtension()
);

const Root = ({ base }) => {
	return (
		<Provider store={store}>
			<BrowserRouter basename={base}>
				<App />
			</BrowserRouter>
		</Provider>
	);
};

export default Root;
