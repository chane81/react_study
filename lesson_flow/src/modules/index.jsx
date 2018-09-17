//import reduceReducers from 'reduce-reducers';
import { default as Lesson14Input } from './lesson14/Input';
import { default as Lesson14Todos } from './lesson14/Todos';
//import { default as Lesson15Counter } from './lesson15/Counter';
import { default as Lesson15reduxThunk } from './lesson15/reduxThunk/Post.jsx';
import { default as Lesson15PromiseMiddleware } from './lesson15/promiseMiddleware/Post.jsx';
import { default as Lesson15reduxPender } from './lesson15/reduxPender/Post.jsx';
import { penderReducer } from 'redux-pender';

import { combineReducers } from 'redux';

//const rootReducers = reduceReducers({ Lesson14Input, Lesson14Todos });
const rootReducers = combineReducers({
	input: Lesson14Input,
	todos: Lesson14Todos,
	//counter: Lesson15Counter,
	postThunk: Lesson15reduxThunk,
	postPromise: Lesson15PromiseMiddleware,
	postPender: Lesson15reduxPender,
	pender: penderReducer
});

export default rootReducers;
