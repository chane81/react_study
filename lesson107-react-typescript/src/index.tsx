import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { type } from 'os';

ReactDOM.render(<App name='mark' age={32} address='잠실' />, document.getElementById('root'));

serviceWorker.unregister();
