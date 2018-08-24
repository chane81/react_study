
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App'

// 리덕스 관련 불러오기
import { createStore } from 'redux';
import reducers from '../reducers/index';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(reducers);


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