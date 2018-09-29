import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import MarketStore from './stores/MarketStore';

const marketStore = new MarketStore();

ReactDOM.render(
	<Provider market={marketStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
