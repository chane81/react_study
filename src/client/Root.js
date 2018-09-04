import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

// 리덕스 관련 불러오기
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 리듀서 가져오기
import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import { default as Lesson13Reducers } from '../reducers/index';
import { default as Lesson14Reducers } from '../modules/index';

//const reducers = reduceReducers(Lesson14Reducers);

//const rootReducers = reduceReducers({ Lesson14Input, Lesson14Todos });
const rootReducers = combineReducers({ Lesson13Reducers, Lesson14Reducers });

// 스토어 생성
// 크롬 리덕스 dev tools 를 쓰기위해 구문추가 => window.devToolsExtension && window.devToolsExtension()
const store = createStore(
	rootReducers,
	window.devToolsExtension && window.devToolsExtension()
);

const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
};

export default Root;
