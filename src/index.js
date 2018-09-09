import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
=======
ReactDOM.render(
	<Root baseUrl={process.env.PUBLIC_URL || ''} />,
	document.getElementById('root')
);
registerServiceWorker();
>>>>>>> 브랜치테스트1
