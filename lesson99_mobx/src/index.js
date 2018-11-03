import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import MarketStore from './stores/MarketStore';
//import PostStore from './stores/PostStore';
import PostStore from './stores/PostMobxPromiseStore';
import PostStoreV2 from './stores/PostMobxPromiseStoreV2';
import PostStoreV3 from './stores/PostMobxPromiseStoreV3';


const marketStore = new MarketStore();
const postStore = new PostStore();
const postStoreV2 = new PostStoreV2();

ReactDOM.render(
	<Provider
		marketStore={marketStore}
		postStore={postStore}
		postStoreV2={postStoreV2}
		postStoreV3={PostStoreV3}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
