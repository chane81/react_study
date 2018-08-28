
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App'

// 리덕스 관련 불러오기
import { createStore } from 'redux';
import reducers from '../reducers/index';
import { Provider } from 'react-redux';

// 스토어 생성
// 크롬 리덕스 dev tools 를 쓰기위해 구문추가 => window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());


const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
}

export default Root;