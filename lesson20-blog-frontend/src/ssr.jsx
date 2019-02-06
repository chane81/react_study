import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import configure from 'store/configure';
import App from 'components/App';

const render = (ctx) => {
  const { url } = ctx; // 요청에서 url 을 받아 옴

  // 요청시마다 새 스토어를 생성
  const store = configure();

  // renderToString는 랜더링된 결과물을 문자열로 만들어줌
  // 서버에서는 BrowserRouter 대신에 StaticRouter 를 사용함
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return html;
};

export default render;
