import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Root baseUrl={process.env.PUBLIC_URL || ''} />,
	document.getElementById('root')
);
registerServiceWorker();
