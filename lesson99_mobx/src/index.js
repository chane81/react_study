import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import MarketStore from './stores/MarketStore';
//import PostStore from './stores/PostStore.jsx';
import PostStore from './stores/PostMobxPromiseStore.jsx';
import PostStoreV2 from './stores/PostMobxPromiseStoreV2.jsx';

const marketStore = new MarketStore();
const postStore = new PostStore();
const postStoreV2 = new PostStoreV2();

ReactDOM.render(
	<Provider
		marketStore={marketStore}
		postStore={postStore}
		postStoreV2={postStoreV2}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
