/* 호환성 문제 해결을 위한 import, 제일 상단에 선언해야함 */
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import 'babel-polyfill';
/* 호환성 문제 해결을 위한 import, 제일 상단에 선언해야함 */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Root baseUrl={process.env.PUBLIC_URL || ''} />,
	document.getElementById('root')
);
registerServiceWorker();
